import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import { mockProducts, brands, categories } from "@/lib/mockData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";

export default function Store() {
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState("popularity");
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);

  // Filter products
  let filteredProducts = mockProducts.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || 
      selectedCategories.includes(product.subcategory);
    const brandMatch = selectedBrands.length === 0 || 
      selectedBrands.includes(product.brand);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return categoryMatch && brandMatch && priceMatch;
  });

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      case 'rating':
        return b.rating - a.rating;
      case 'bestsellers':
        return (b.sales || 0) - (a.sales || 0);
      default:
        return (b.views || 0) - (a.views || 0);
    }
  });

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 200]);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="border-b bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground" data-testid="breadcrumb-home">Home</a>
            <span>/</span>
            <span className="text-foreground" data-testid="breadcrumb-store">Store</span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <FilterSidebar 
                  brands={brands} 
                  categories={categories}
                  selectedCategories={selectedCategories}
                  selectedBrands={selectedBrands}
                  priceRange={priceRange}
                  onCategoryChange={handleCategoryChange}
                  onBrandChange={handleBrandChange}
                  onPriceChange={handlePriceChange}
                />
                {(selectedCategories.length > 0 || selectedBrands.length > 0 || priceRange[0] > 0 || priceRange[1] < 200) && (
                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={clearFilters}
                    data-testid="button-clear-filters"
                  >
                    Clear All Filters
                  </Button>
                )}
              </div>
            </aside>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-sans font-bold mb-2">
                    Mobile Accessories Store
                  </h1>
                  <p className="text-sm text-muted-foreground" data-testid="text-product-count">
                    Showing {totalProducts > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, totalProducts)} of {totalProducts} products
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden gap-2" data-testid="button-mobile-filters">
                        <SlidersHorizontal className="h-4 w-4" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80 overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterSidebar 
                          brands={brands} 
                          categories={categories}
                          selectedCategories={selectedCategories}
                          selectedBrands={selectedBrands}
                          priceRange={priceRange}
                          onCategoryChange={handleCategoryChange}
                          onBrandChange={handleBrandChange}
                          onPriceChange={handlePriceChange}
                        />
                        {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
                          <Button
                            variant="outline"
                            className="w-full mt-4"
                            onClick={clearFilters}
                            data-testid="button-clear-filters-mobile"
                          >
                            Clear All Filters
                          </Button>
                        )}
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]" data-testid="select-sort">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popularity">Popularity</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest Arrivals</SelectItem>
                      <SelectItem value="rating">Best Rated</SelectItem>
                      <SelectItem value="bestsellers">Best Sellers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {totalProducts > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                    {currentProducts.map((product) => (
                      <ProductCard 
                        key={product.id} 
                        {...product} 
                        image={product.images[0]}
                        onAddToCart={() => addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.images[0]
                        })}
                      />
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Show:</span>
                      <Select value={itemsPerPage.toString()} onValueChange={(v) => setItemsPerPage(Number(v))}>
                        <SelectTrigger className="w-[100px]" data-testid="select-items-per-page">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="24">24</SelectItem>
                          <SelectItem value="48">48</SelectItem>
                          <SelectItem value="96">96</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => p - 1)}
                        data-testid="button-prev-page"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>

                      <div className="flex gap-1">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          const page = i + 1;
                          return (
                            <Button
                              key={page}
                              variant={currentPage === page ? "default" : "outline"}
                              size="icon"
                              onClick={() => setCurrentPage(page)}
                              data-testid={`button-page-${page}`}
                            >
                              {page}
                            </Button>
                          );
                        })}
                      </div>

                      <Button
                        variant="outline"
                        size="icon"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => p + 1)}
                        data-testid="button-next-page"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No products match your filters</p>
                  <Button onClick={clearFilters} data-testid="button-clear-no-results">
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
