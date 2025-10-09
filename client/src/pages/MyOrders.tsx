import { Package, Truck, CheckCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useEffect, useState } from "react";

interface Order {
  orderNumber: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  shippingInfo: {
    name: string;
    email: string;
    phone: string;
    city: string;
    address: string;
  };
  paymentInfo: {
    cardNumber: string;
    cardholderName: string;
  };
  shippingMethod: 'standard' | 'express' | 'overnight';
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  estimatedDelivery: string;
  status: string;
  createdAt: string;
}

const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case 'processing':
      return <Clock className="h-4 w-4" />;
    case 'shipped':
      return <Truck className="h-4 w-4" />;
    case 'delivered':
      return <CheckCircle className="h-4 w-4" />;
    default:
      return <Package className="h-4 w-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'processing':
      return 'bg-blue-500';
    case 'shipped':
      return 'bg-orange-500';
    case 'delivered':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
};

export default function MyOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      const parsedOrders = JSON.parse(savedOrders);
      // Sort orders by creation date (newest first)
      const sortedOrders = parsedOrders.sort((a: Order, b: Order) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setOrders(sortedOrders);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2" data-testid="heading-my-orders">My Orders</h1>
            <p className="text-muted-foreground">Track and manage your orders</p>
          </div>

          {orders.length === 0 ? (
            <Card className="p-12 text-center">
              <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No orders yet</h2>
              <p className="text-muted-foreground mb-6">When you place an order, it will appear here</p>
              <Link href="/store">
                <Button data-testid="button-start-shopping">Start Shopping</Button>
              </Link>
            </Card>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.orderNumber} className="p-6 hover-elevate" data-testid={`order-card-${order.orderNumber}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold" data-testid={`text-order-number-${order.orderNumber}`}>
                          Order #{order.orderNumber}
                        </h3>
                        <Badge className={`${getStatusColor(order.status)} text-white`} data-testid={`badge-status-${order.orderNumber}`}>
                          <span className="mr-1">{getStatusIcon(order.status)}</span>
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Placed on {new Date(order.createdAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="text-lg font-bold" data-testid={`text-total-${order.orderNumber}`}>
                          AED {order.total.toFixed(2)}
                        </p>
                      </div>
                      <Link href={`/order/${order.orderNumber}`}>
                        <Button variant="outline" data-testid={`button-view-order-${order.orderNumber}`}>
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center gap-4 overflow-x-auto">
                      {order.items.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex items-center gap-3 min-w-fit">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-medium truncate">{item.name}</p>
                            <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                      {order.items.length > 3 && (
                        <p className="text-sm text-muted-foreground whitespace-nowrap">
                          +{order.items.length - 3} more item{order.items.length - 3 > 1 ? 's' : ''}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
