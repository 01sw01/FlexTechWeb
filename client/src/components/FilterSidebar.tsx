import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface FilterSidebarProps {
  brands: string[];
  categories: { name: string; count: number }[];
  selectedCategories?: string[];
  selectedBrands?: string[];
  priceRange?: [number, number];
  onCategoryChange?: (category: string) => void;
  onBrandChange?: (brand: string) => void;
  onPriceChange?: (range: [number, number]) => void;
}

export default function FilterSidebar({ 
  brands, 
  categories,
  selectedCategories = [],
  selectedBrands = [],
  priceRange = [0, 200],
  onCategoryChange,
  onBrandChange,
  onPriceChange
}: FilterSidebarProps) {
  const [showBrands, setShowBrands] = useState(true);
  const [showCategories, setShowCategories] = useState(true);
  const [showPrice, setShowPrice] = useState(true);

  const activeFilterCount = selectedBrands.length + selectedCategories.length;

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Filters</h2>
      </div>

      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedBrands.map(brand => (
            <Badge key={brand} variant="secondary" className="gap-1" data-testid={`badge-filter-${brand}`}>
              {brand}
              <button onClick={() => onBrandChange?.(brand)} className="hover:text-destructive">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {selectedCategories.map(cat => (
            <Badge key={cat} variant="secondary" className="gap-1" data-testid={`badge-filter-${cat}`}>
              {cat}
              <button onClick={() => onCategoryChange?.(cat)} className="hover:text-destructive">
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
                  onCheckedChange={() => onCategoryChange?.(category.name)}
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
                  onCheckedChange={() => onBrandChange?.(brand)}
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
              onValueChange={(value) => onPriceChange?.(value as [number, number])}
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
    </div>
  );
}
