import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Package, Search } from "lucide-react";

export default function TrackOrderLookup() {
  const [orderNumber, setOrderNumber] = useState("");
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber.trim()) {
      setLocation(`/order/${orderNumber.trim()}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Package className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Track Your Order</h1>
            <p className="text-muted-foreground">
              Enter your order number to track your package
            </p>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="orderNumber" className="text-sm font-medium">
                  Order Number
                </label>
                <div className="relative">
                  <Input
                    id="orderNumber"
                    type="text"
                    placeholder="e.g., FT12345678"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="pr-10"
                    data-testid="input-order-number"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground">
                  You can find your order number in the confirmation email or on your receipt
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                data-testid="button-track-order"
              >
                <Package className="h-4 w-4 mr-2" />
                Track Order
              </Button>
            </form>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Need help? Contact our support team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="https://wa.me/+971542664712" target="_blank" rel="noopener noreferrer">
                  WhatsApp Support
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
