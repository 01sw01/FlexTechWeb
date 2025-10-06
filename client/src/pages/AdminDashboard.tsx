import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ShoppingCart, Users, DollarSign, AlertTriangle, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Products', value: '156', icon: Package, change: '+12%', color: 'text-chart-1' },
    { label: 'Total Orders', value: '89', icon: ShoppingCart, change: '+23%', color: 'text-chart-2' },
    { label: 'Revenue', value: 'AED 12,450', icon: DollarSign, change: '+18%', color: 'text-chart-3' },
    { label: 'Active Users', value: '1,234', icon: Users, change: '+8%', color: 'text-chart-4' },
  ];

  const salesData = [
    { name: 'Mon', sales: 4200 },
    { name: 'Tue', sales: 3800 },
    { name: 'Wed', sales: 5100 },
    { name: 'Thu', sales: 4600 },
    { name: 'Fri', sales: 6200 },
    { name: 'Sat', sales: 7500 },
    { name: 'Sun', sales: 6800 },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', amount: 'AED 129.99', status: 'Confirmed' },
    { id: '#ORD-002', customer: 'Jane Smith', amount: 'AED 79.99', status: 'Shipped' },
    { id: '#ORD-003', customer: 'Mike Johnson', amount: 'AED 199.99', status: 'Pending' },
  ];

  const lowStockItems = [
    { name: 'Wireless Earbuds Pro', stock: 8 },
    { name: 'Premium Leather Case', stock: 12 },
    { name: 'Fast Charger 65W', stock: 15 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">FT</span>
              </div>
              <div>
                <h1 className="font-bold text-xl">FlexTech Admin</h1>
                <p className="text-xs text-muted-foreground">Dashboard</p>
              </div>
            </div>
            <Button variant="outline" data-testid="button-logout">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Dashboard Overview</h2>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6" data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold" data-testid={`text-stat-value-${index}`}>{stat.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="h-3 w-3 text-chart-3" />
                    <span className="text-xs text-chart-3">{stat.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-muted`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Weekly Sales</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Sales by Day</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Recent Orders</h3>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between py-3 border-b last:border-0">
                  <div>
                    <p className="font-medium" data-testid={`text-order-id-${order.id}`}>{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <Badge variant="secondary" className="mt-1">
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" data-testid="button-view-all-orders">
              View All Orders
            </Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-chart-4" />
              <h3 className="font-semibold">Low Stock Alerts</h3>
            </div>
            <div className="space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                  <p className="text-sm" data-testid={`text-low-stock-item-${index}`}>{item.name}</p>
                  <Badge variant="destructive">
                    {item.stock} left
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" data-testid="button-manage-inventory">
              Manage Inventory
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
}
