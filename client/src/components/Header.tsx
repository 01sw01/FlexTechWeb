import { ShoppingCart, Heart, User, Search, Menu, MessageCircle, X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Link } from "wouter";
import logoImage from "@assets/flextech_1759756527490.png";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/hooks/use-auth";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { items, cartCount, cartTotal, updateQuantity, removeFromCart } = useCart();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          Exciting News! iPhone 16 Pro Max is now Available on Tabby.
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden"
            data-testid="button-mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <a href="/" className="flex items-center gap-2">
            <img src={logoImage} alt="FlexTech" className="h-10" />
          </a>

          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              data-testid="button-wishlist"
              onClick={() => console.log('Wishlist clicked')}
            >
              <Heart className="h-5 w-5" />
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  data-testid="button-cart"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <Badge 
                      className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                      data-testid="badge-cart-count"
                    >
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>
                
                <div className="mt-8 space-y-4">
                  {items.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Your cart is empty</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4 max-h-[400px] overflow-y-auto">
                        {items.map(item => (
                          <div key={item.id} className="flex gap-4 p-4 bg-muted/30 rounded-lg" data-testid={`cart-item-${item.id}`}>
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                            <div className="flex-1">
                              <h4 className="font-semibold">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">AED {item.price.toFixed(2)}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  data-testid={`button-decrease-${item.id}`}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center" data-testid={`quantity-${item.id}`}>{item.quantity}</span>
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, 1)}
                                  data-testid={`button-increase-${item.id}`}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => removeFromCart(item.id)}
                              data-testid={`button-remove-${item.id}`}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t pt-4 space-y-4">
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total:</span>
                          <span data-testid="text-cart-total">AED {cartTotal.toFixed(2)}</span>
                        </div>
                        <Link href="/checkout">
                          <Button className="w-full" size="lg" data-testid="button-checkout">
                            Proceed to Checkout
                          </Button>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Button
              variant="ghost"
              size="icon"
              data-testid="button-account"
              asChild
            >
              <Link href={user ? "/account" : "/auth"}>
                <User className="h-5 w-5" />
              </Link>
            </Button>

            <a 
              href="https://wa.me/+971542664712" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <Button
                variant="default"
                size="sm"
                className="gap-2"
                data-testid="button-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>

        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-mobile"
            />
          </div>
        </div>
      </div>

      <nav className="hidden lg:block border-t bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 py-3 text-sm font-medium">
            <Link href="/" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-home">
              Home
            </Link>
            <Link href="/store" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-store">
              Store
            </Link>
            <Link href="/orders" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-orders">
              Track Order
            </Link>
            <Link href="/about" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-about">
              About us
            </Link>
            <Link href="/contact" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-contact">
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
