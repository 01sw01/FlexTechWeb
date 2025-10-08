import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "wouter";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  inStock: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  onAddToCart?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  brand,
  price,
  originalPrice,
  discount,
  rating,
  reviewCount,
  image,
  inStock,
  isBestseller,
  isNew,
  onAddToCart,
  onAddToWishlist,
  onQuickView
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist?.(id);
    console.log('Wishlist toggled for:', id);
  };

  return (
    <Card className="group overflow-visible hover-elevate transition-all" data-testid={`card-product-${id}`}>
      <Link href={`/product/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount && (
            <Badge className="bg-destructive text-destructive-foreground" data-testid="badge-discount">
              -{discount}%
            </Badge>
          )}
          {isBestseller && (
            <Badge className="bg-chart-1 text-white" data-testid="badge-bestseller">
              Bestseller
            </Badge>
          )}
          {isNew && (
            <Badge className="bg-chart-3 text-white" data-testid="badge-new">
              New
            </Badge>
          )}
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Button
            size="icon"
            variant="secondary"
            className={`rounded-full ${isWishlisted ? 'bg-primary text-primary-foreground' : ''}`}
            onClick={handleWishlist}
            data-testid="button-wishlist-product"
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full"
            onClick={() => {
              onQuickView?.(id);
              console.log('Quick view:', id);
            }}
            data-testid="button-quick-view"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {!inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="secondary" className="text-base" data-testid="badge-out-of-stock">
              Out of Stock
            </Badge>
          </div>
        )}
        </div>
      </Link>

      <div className="p-4 space-y-3">
        <Link href={`/product/${id}`} className="block">
          <div>
            <p className="text-sm text-muted-foreground" data-testid="text-brand">{brand}</p>
            <h3 className="font-sans font-medium line-clamp-2" data-testid="text-product-name">{name}</h3>
          </div>
        </Link>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating) 
                  ? 'fill-primary text-primary' 
                  : 'fill-muted text-muted'
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1" data-testid="text-review-count">
            ({reviewCount})
          </span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold" data-testid="text-price">
            AED {price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through" data-testid="text-original-price">
              AED {originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <Button
          className="w-full gap-2"
          disabled={!inStock}
          onClick={() => {
            onAddToCart?.(id);
            console.log('Added to cart:', id);
          }}
          data-testid="button-add-to-cart"
        >
          <ShoppingCart className="h-4 w-4" />
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </Card>
  );
}
