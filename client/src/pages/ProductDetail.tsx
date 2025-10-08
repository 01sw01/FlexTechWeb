import { useParams } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockProducts } from "@/lib/mockData";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Link } from "wouter";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id;
  const product = mockProducts.find(p => p.id === productId);
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link href="/store">
              <Button>Back to Store</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      });
    }
    toast({
      title: "Added to cart!",
      description: `${quantity} × ${product.name}`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist!",
      description: product.name,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img
                  src={product.images[selectedImage] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  data-testid="img-product-main"
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? 'border-primary' : 'border-transparent'
                      }`}
                      data-testid={`button-thumbnail-${idx}`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2" data-testid="text-product-brand">
                  {product.brand}
                </p>
                <h1 className="text-3xl md:text-4xl font-sans font-bold mb-4" data-testid="text-product-title">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-primary text-primary'
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground" data-testid="text-rating">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {product.discount && (
                    <Badge className="bg-destructive text-destructive-foreground" data-testid="badge-discount">
                      -{product.discount}% OFF
                    </Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-chart-1 text-white">Bestseller</Badge>
                  )}
                  {product.isNew && (
                    <Badge className="bg-chart-3 text-white">New</Badge>
                  )}
                  <Badge variant={product.inStock ? "default" : "secondary"} data-testid="badge-stock">
                    {product.inStock ? `In Stock (${product.stockQuantity})` : 'Out of Stock'}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold" data-testid="text-product-price">
                    AED {product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through" data-testid="text-original-price">
                      AED {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <p className="text-sm text-chart-1">
                    You save: AED {(product.originalPrice - product.price).toFixed(2)}
                  </p>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed" data-testid="text-product-description">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={!product.inStock}
                      data-testid="button-decrease-quantity"
                    >
                      -
                    </Button>
                    <span className="w-12 text-center font-medium" data-testid="text-quantity">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                      disabled={!product.inStock}
                      data-testid="button-increase-quantity"
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    className="flex-1 gap-2"
                    size="lg"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    data-testid="button-add-to-cart"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2"
                    onClick={handleWishlist}
                    data-testid="button-wishlist"
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current text-primary' : ''}`} />
                    {isWishlisted ? 'Wishlisted' : 'Wishlist'}
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Free Delivery</p>
                  <p className="text-xs text-muted-foreground">On orders over AED 100</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Warranty</p>
                  <p className="text-xs text-muted-foreground">1 Year Coverage</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30 Day Return</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="description" data-testid="tab-description">Description</TabsTrigger>
              <TabsTrigger value="specifications" data-testid="tab-specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features" data-testid="tab-features">Features</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6" data-testid="content-description">
              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6" data-testid="content-specifications">
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-4 bg-muted/30 rounded-lg">
                    <span className="font-medium">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
                <div className="flex justify-between p-4 bg-muted/30 rounded-lg">
                  <span className="font-medium">SKU:</span>
                  <span className="text-muted-foreground">{product.sku}</span>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="mt-6" data-testid="content-features">
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(p => (
                  <ProductCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    brand={p.brand}
                    price={p.price}
                    originalPrice={p.originalPrice}
                    discount={p.discount}
                    rating={p.rating}
                    reviewCount={p.reviewCount}
                    image={p.images[0]}
                    inStock={p.inStock}
                    isBestseller={p.isBestseller}
                    isNew={p.isNew}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
