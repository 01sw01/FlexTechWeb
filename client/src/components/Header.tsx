import { ShoppingCart, Heart, User, Search, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import logoImage from "@assets/image_1759744025337.png";

interface HeaderProps {
  cartCount?: number;
  onMenuClick?: () => void;
}

export default function Header({ cartCount = 0, onMenuClick }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

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
            
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              data-testid="button-cart"
              onClick={() => console.log('Cart clicked')}
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

            <Button
              variant="ghost"
              size="icon"
              data-testid="button-account"
              onClick={() => console.log('Account clicked')}
            >
              <User className="h-5 w-5" />
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

      <nav className="hidden lg:block border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 py-3 text-sm">
            <a href="/" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-home">
              Home
            </a>
            <a href="/products" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-products">
              Products
            </a>
            <a href="/products?category=chargers" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-chargers">
              Chargers
            </a>
            <a href="/products?category=cases" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-cases">
              Cases
            </a>
            <a href="/products?category=headphones" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-headphones">
              Headphones
            </a>
            <a href="/products?category=powerbanks" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-powerbanks">
              Power Banks
            </a>
            <a href="/about" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-about">
              About Us
            </a>
            <a href="/contact" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
