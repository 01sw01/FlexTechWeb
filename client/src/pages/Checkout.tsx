import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { CreditCard, Truck, ShieldCheck, Tag } from "lucide-react";

const PROMO_CODES = {
  'SAVE10': { discount: 10, type: 'percentage' as const },
  'SAVE20': { discount: 20, type: 'percentage' as const },
  'FLAT50': { discount: 50, type: 'fixed' as const },
};

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<keyof typeof PROMO_CODES | null>(null);
  const [promoError, setPromoError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const shippingFee = cartTotal >= 100 ? 0 : 15;
  
  const getDiscount = () => {
    if (!appliedPromo) return 0;
    const promo = PROMO_CODES[appliedPromo];
    if (promo.type === 'percentage') {
      return (cartTotal * promo.discount) / 100;
    }
    return promo.discount;
  };

  const discount = getDiscount();
  const finalTotal = cartTotal + shippingFee - discount;

  const handleApplyPromo = () => {
    const code = promoCode.toUpperCase() as keyof typeof PROMO_CODES;
    if (PROMO_CODES[code]) {
      const promo = PROMO_CODES[code];
      const savings = promo.type === 'percentage' 
        ? (cartTotal * promo.discount) / 100 
        : promo.discount;
      
      setAppliedPromo(code);
      setPromoError("");
      toast({
        title: "Promo code applied!",
        description: `You saved AED ${savings.toFixed(2)}`,
      });
    } else {
      setPromoError("Invalid promo code");
      setAppliedPromo(null);
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoCode("");
    setPromoError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || 
        !formData.city || !formData.cardNumber || !formData.cardName || 
        !formData.expiryDate || !formData.cvv) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate payment processing
    toast({
      title: "Order placed successfully!",
      description: `Order total: AED ${finalTotal.toFixed(2)}`,
    });

    // Clear cart and redirect
    clearCart();
    setTimeout(() => {
      setLocation("/");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <Button onClick={() => setLocation("/store")}>Continue Shopping</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Shipping Information */}
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Truck className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Shipping Information</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        data-testid="input-full-name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        data-testid="input-email"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        data-testid="input-phone"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        data-testid="input-city"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        data-testid="input-address"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        data-testid="input-postal-code"
                      />
                    </div>
                  </div>
                </Card>

                {/* Payment Information */}
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Payment Information</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        data-testid="input-card-number"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="cardName">Cardholder Name *</Label>
                      <Input
                        id="cardName"
                        value={formData.cardName}
                        onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                        data-testid="input-card-name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                        data-testid="input-expiry-date"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        data-testid="input-cvv"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </Card>

                <Button type="submit" size="lg" className="w-full" data-testid="button-place-order">
                  Place Order - AED {finalTotal.toFixed(2)}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-3" data-testid={`order-item-${item.id}`}>
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold">AED {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span data-testid="text-subtotal">AED {cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span data-testid="text-shipping">
                      {shippingFee === 0 ? 'FREE' : `AED ${shippingFee.toFixed(2)}`}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-chart-1">
                      <span>Discount ({appliedPromo})</span>
                      <span data-testid="text-discount">-AED {discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold border-t pt-2">
                    <span>Total</span>
                    <span data-testid="text-total">AED {finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                {cartTotal >= 100 && (
                  <Badge className="w-full mt-4 bg-chart-1 text-white justify-center">
                    Free shipping applied!
                  </Badge>
                )}
              </Card>

              {/* Promo Code */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Promo Code</h3>
                </div>
                {appliedPromo ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-chart-1/10 rounded-lg">
                      <div>
                        <p className="font-medium text-chart-1">{appliedPromo}</p>
                        <p className="text-sm text-muted-foreground">
                          -{PROMO_CODES[appliedPromo].type === 'percentage' 
                            ? `${PROMO_CODES[appliedPromo].discount}%` 
                            : `AED ${PROMO_CODES[appliedPromo].discount}`}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleRemovePromo}
                        data-testid="button-remove-promo"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => {
                          setPromoCode(e.target.value.toUpperCase());
                          setPromoError("");
                        }}
                        data-testid="input-promo-code"
                      />
                      <Button onClick={handleApplyPromo} data-testid="button-apply-promo">
                        Apply
                      </Button>
                    </div>
                    {promoError && (
                      <p className="text-sm text-destructive" data-testid="text-promo-error">{promoError}</p>
                    )}
                    <div className="text-xs text-muted-foreground">
                      <p>Try: SAVE10, SAVE20, or FLAT50</p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
