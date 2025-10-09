import { useAuth } from "@/hooks/use-auth";
import { Redirect } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Package, LogOut, Mail } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

interface Order {
  orderNumber: string;
  userId?: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  total: number;
  status: string;
  createdAt: string;
}

export default function Account() {
  const { user, logoutMutation } = useAuth();
  const [userOrders, setUserOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (user) {
      const savedOrders = localStorage.getItem('orders');
      if (savedOrders) {
        const allOrders = JSON.parse(savedOrders);
        // Filter orders for this user
        const filteredOrders = allOrders.filter((order: Order) => order.userId === user.id);
        setUserOrders(filteredOrders.sort((a: Order, b: Order) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ));
      }
    }
  }, [user]);

  // Redirect if not logged in
  if (!user) {
    return <Redirect to="/auth" />;
  }

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2" data-testid="heading-account">My Account</h1>
            <p className="text-muted-foreground">Manage your profile and orders</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* User Profile Card */}
            <Card className="p-6 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Profile</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold" data-testid="text-username">{user.username}</p>
                    <Badge variant="secondary">Member</Badge>
                  </div>
                </div>

                {user.username.includes('@') && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span data-testid="text-email">{user.username}</span>
                  </div>
                )}

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleLogout}
                  disabled={logoutMutation.isPending}
                  data-testid="button-logout"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  {logoutMutation.isPending ? "Logging out..." : "Logout"}
                </Button>
              </div>
            </Card>

            {/* Orders Section */}
            <Card className="p-6 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Package className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">My Orders</h2>
              </div>

              {userOrders.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">You haven't placed any orders yet</p>
                  <Link href="/store">
                    <Button data-testid="button-start-shopping">Start Shopping</Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {userOrders.slice(0, 5).map((order) => (
                    <div 
                      key={order.orderNumber} 
                      className="border rounded-lg p-4 hover-elevate"
                      data-testid={`order-item-${order.orderNumber}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold">Order #{order.orderNumber}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">AED {order.total.toFixed(2)}</p>
                          <Badge className="mt-1">{order.status}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <p className="text-sm text-muted-foreground">
                          {order.items.length} item{order.items.length > 1 ? 's' : ''}
                        </p>
                        <Link href={`/order/${order.orderNumber}`}>
                          <Button 
                            variant="outline" 
                            size="sm"
                            data-testid={`button-view-order-${order.orderNumber}`}
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}

                  {userOrders.length > 5 && (
                    <Link href="/orders">
                      <Button variant="outline" className="w-full" data-testid="button-view-all-orders">
                        View All Orders
                      </Button>
                    </Link>
                  )}
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
