import FilterSidebar from '../FilterSidebar';
import { brands, categories } from '@/lib/mockData';

export default function FilterSidebarExample() {
  return (
    <div className="p-4 max-w-sm">
      <FilterSidebar brands={brands} categories={categories} />
    </div>
  );
}
