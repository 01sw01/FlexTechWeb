import { useParams, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  orderNumber: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered';
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  shippingMethod: string;
  discount: number;
  total: number;
  shippingInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };
  estimatedDelivery: string;
}

export default function OrderTracking() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const orderNumber = params.orderNumber;

  // Get order from localStorage
  const getOrder = (): Order | null => {
    const ordersJson = localStorage.getItem('orders');
    if (!ordersJson) return null;
    
    const orders: Order[] = JSON.parse(ordersJson);
    return orders.find(o => o.orderNumber === orderNumber) || null;
  };

  const order = getOrder();

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-2">Order Not Found</h1>
            <p className="text-muted-foreground mb-4">
              We couldn't find an order with number: {orderNumber}
            </p>
            <Button onClick={() => setLocation("/store")}>Continue Shopping</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getStatusSteps = () => {
    const steps = [
      { key: 'processing', label: 'Order Placed', icon: Package, completed: true },
      { key: 'shipped', label: 'Shipped', icon: Truck, completed: order.status === 'shipped' || order.status === 'delivered' },
      { key: 'delivered', label: 'Delivered', icon: CheckCircle, completed: order.status === 'delivered' }
    ];
    return steps;
  };

  const statusColors = {
    processing: 'bg-blue-500',
    shipped: 'bg-orange-500',
    delivered: 'bg-green-500'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2" data-testid="text-order-number">Order #{order.orderNumber}</h1>
            <p className="text-muted-foreground">
              Placed on {new Date(order.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Status Timeline */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Truck className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Order Status</h2>
                  <Badge className={`ml-auto ${statusColors[order.status]} text-white`} data-testid="badge-order-status">
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </div>

                {/* Timeline */}
                <div className="space-y-4">
                  {getStatusSteps().map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.key} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`rounded-full p-2 ${step.completed ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          {index < getStatusSteps().length - 1 && (
                            <div className={`w-0.5 h-12 mt-2 ${step.completed ? 'bg-primary' : 'bg-muted'}`} />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <h3 className={`font-medium ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {step.label}
                          </h3>
                          {step.key === 'processing' && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Your order has been confirmed and is being prepared
                            </p>
                          )}
                          {step.key === 'shipped' && order.status === 'shipped' && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Your order is on the way via {order.shippingMethod}
                            </p>
                          )}
                          {step.key === 'delivered' && order.status === 'delivered' && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Successfully delivered to your address
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {order.status !== 'delivered' && (
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Estimated Delivery</p>
                      <p className="text-sm text-muted-foreground">{order.estimatedDelivery}</p>
                    </div>
                  </div>
                )}
              </Card>

              {/* Order Items */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Items</h2>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4" data-testid={`order-item-${item.id}`}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                        <p className="font-semibold mt-1">AED {item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Shipping Address */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Shipping Address</h2>
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-medium text-foreground">{order.shippingInfo.fullName}</p>
                  <p>{order.shippingInfo.address}</p>
                  <p>{order.shippingInfo.city}</p>
                  <p>{order.shippingInfo.phone}</p>
                  <p>{order.shippingInfo.email}</p>
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span data-testid="text-subtotal">AED {order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping ({order.shippingMethod})</span>
                    <span data-testid="text-shipping">
                      {order.shipping === 0 ? 'Free' : `AED ${order.shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {order.discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span data-testid="text-discount">-AED {order.discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span data-testid="text-total">AED {order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6" 
                  onClick={() => setLocation("/store")}
                  data-testid="button-continue-shopping"
                >
                  Continue Shopping
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
