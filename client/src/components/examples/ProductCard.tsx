import ProductCard from '../ProductCard';
import { mockProducts } from '@/lib/mockData';

export default function ProductCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <ProductCard {...mockProducts[0]} />
    </div>
  );
}
