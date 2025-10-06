import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

interface FilterSidebarProps {
  brands: string[];
  categories: { name: string; count: number }[];
  onFilterChange?: (filters: any) => void;
}

export default function FilterSidebar({ brands, categories, onFilterChange }: FilterSidebarProps) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  
  const [showBrands, setShowBrands] = useState(true);
  const [showCategories, setShowCategories] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showRating, setShowRating] = useState(true);

  const toggleBrand = (brand: string) => {
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updated);
    console.log('Brands selected:', updated);
  };

  const toggleCategory = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updated);
    console.log('Categories selected:', updated);
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setPriceRange([0, 200]);
    setSelectedRating(null);
    console.log('All filters cleared');
  };

  const activeFilterCount = selectedBrands.length + selectedCategories.length + (selectedRating ? 1 : 0);

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Filters</h2>
        {activeFilterCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            data-testid="button-clear-filters"
          >
            Clear All
          </Button>
        )}
      </div>

      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedBrands.map(brand => (
            <Badge key={brand} variant="secondary" className="gap-1" data-testid={`badge-filter-${brand}`}>
              {brand}
              <button onClick={() => toggleBrand(brand)} className="hover:text-destructive">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {selectedCategories.map(cat => (
            <Badge key={cat} variant="secondary" className="gap-1" data-testid={`badge-filter-${cat}`}>
              {cat}
              <button onClick={() => toggleCategory(cat)} className="hover:text-destructive">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      <div className="space-y-4">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="flex items-center justify-between w-full py-2"
          data-testid="button-toggle-categories"
        >
          <span className="font-medium">Category</span>
          {showCategories ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        
        {showCategories && (
          <div className="space-y-3 pl-2">
            {categories.map(category => (
              <div key={category.name} className="flex items-center gap-2">
                <Checkbox
                  id={`cat-${category.name}`}
                  checked={selectedCategories.includes(category.name)}
                  onCheckedChange={() => toggleCategory(category.name)}
                  data-testid={`checkbox-category-${category.name.toLowerCase()}`}
                />
                <Label
                  htmlFor={`cat-${category.name}`}
                  className="flex-1 cursor-pointer text-sm"
                >
                  {category.name} ({category.count})
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t pt-4 space-y-4">
        <button
          onClick={() => setShowBrands(!showBrands)}
          className="flex items-center justify-between w-full py-2"
          data-testid="button-toggle-brands"
        >
          <span className="font-medium">Brand</span>
          {showBrands ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        
        {showBrands && (
          <div className="space-y-3 pl-2 max-h-64 overflow-y-auto">
            {brands.map(brand => (
              <div key={brand} className="flex items-center gap-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => toggleBrand(brand)}
                  data-testid={`checkbox-brand-${brand.toLowerCase()}`}
                />
                <Label
                  htmlFor={`brand-${brand}`}
                  className="flex-1 cursor-pointer text-sm"
                >
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t pt-4 space-y-4">
        <button
          onClick={() => setShowPrice(!showPrice)}
          className="flex items-center justify-between w-full py-2"
          data-testid="button-toggle-price"
        >
          <span className="font-medium">Price Range</span>
          {showPrice ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        
        {showPrice && (
          <div className="space-y-4 pl-2">
            <Slider
              value={priceRange}
              onValueChange={(value) => {
                setPriceRange(value);
                console.log('Price range:', value);
              }}
              max={200}
              step={5}
              className="w-full"
              data-testid="slider-price-range"
            />
            <div className="flex items-center justify-between text-sm">
              <span data-testid="text-min-price">AED {priceRange[0]}</span>
              <span data-testid="text-max-price">AED {priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      <div className="border-t pt-4 space-y-4">
        <button
          onClick={() => setShowRating(!showRating)}
          className="flex items-center justify-between w-full py-2"
          data-testid="button-toggle-rating"
        >
          <span className="font-medium">Rating</span>
          {showRating ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        
        {showRating && (
          <div className="space-y-2 pl-2">
            {[4, 3, 2, 1].map(rating => (
              <button
                key={rating}
                onClick={() => {
                  setSelectedRating(rating === selectedRating ? null : rating);
                  console.log('Rating selected:', rating);
                }}
                className={`flex items-center gap-2 w-full p-2 rounded-md hover-elevate ${
                  selectedRating === rating ? 'bg-accent' : ''
                }`}
                data-testid={`button-rating-${rating}`}
              >
                <span className="text-sm">{rating}+ ⭐</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
