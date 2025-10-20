'use client';

import { sampleProducts } from '@/lib/products';
import Filters from '@/components/Filters';
import { Product, type Filters as FiltersType } from '@/types/products';
import { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Grid, List, ChevronDown, Filter } from 'lucide-react';

type ViewMode = 'grid' | 'list';
type SortOption = 'relevance' | 'price-low' | 'price-high' | 'rating' | 'newest';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [filters, setFilters] = useState<FiltersType>({
    categories: [],
    brands: [],
    sizes: [],
    promotions: [],
    shippedFrom: [],
    minPrice: 0,
    maxPrice: 1000,
    rating: 0,
    colors: [],
    warranty: [],
    deliveryOption: null,
  });
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilterChange = (newFilters: FiltersType) => {
    setFilters(newFilters);
    let filtered = sampleProducts;

    if (newFilters.categories.length) {
      filtered = filtered.filter(p => p.category && newFilters.categories.includes(p.category));
    }
    if (newFilters.brands.length) {
      filtered = filtered.filter(p => newFilters.brands.includes(p.brand));
    }
    if (newFilters.sizes.length) {
      filtered = filtered.filter(p => p.size && newFilters.sizes.includes(p.size));
    }
    if (newFilters.promotions.length) {
      filtered = filtered.filter(p =>
        newFilters.promotions.some(promo => p.promotions.includes(promo))
      );
    }
    if (newFilters.shippedFrom.length) {
      filtered = filtered.filter(p => newFilters.shippedFrom.includes(p.shippedFrom));
    }
    if (newFilters.minPrice > 0) {
      filtered = filtered.filter(p => p.price >= newFilters.minPrice);
    }
    if (newFilters.maxPrice < 1000) {
      filtered = filtered.filter(p => p.price <= newFilters.maxPrice);
    }
    if (newFilters.rating > 0) {
      filtered = filtered.filter(p => p.rating >= newFilters.rating);
    }
    if (newFilters.colors.length) {
      filtered = filtered.filter(p => p.color && newFilters.colors.includes(p.color));
    }
    if (newFilters.warranty.length) {
      filtered = filtered.filter(p => newFilters.warranty.includes(p.warranty));
    }
    if (newFilters.deliveryOption !== null) {
      filtered = filtered.filter(p => p.deliveryOption === newFilters.deliveryOption);
    }

    filtered = sortProducts(filtered, sortBy);
    setProducts(filtered);
  };

  const sortProducts = (productsToSort: Product[], sortOption: SortOption): Product[] => {
    const sorted = [...productsToSort];
    switch (sortOption) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return sorted.sort((a, b) => b.id - a.id);
      default:
        return sorted;
    }
  };

  const handleSortChange = (newSort: SortOption) => {
    setSortBy(newSort);
    setProducts(sortProducts(products, newSort));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Products</h1>
          <p className="text-gray-600">Showing {products.length} results</p>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-[2px] shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          {/* Mobile Filter Button */}
          <button
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 border border-gray-300 rounded-[2px] md:hidden"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

          {/* Sort Dropdown */}
          <div className="relative ml-auto">
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value as SortOption)}
              className="appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-[2px] bg-white hover:bg-gray-50 transition-colors cursor-pointer text-sm font-medium"
            >
              <option value="relevance">Sort by: Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rating</option>
              <option value="newest">Newest First</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-600" />
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1 border border-gray-300 rounded-[2px] p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${viewMode === 'grid'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
              title="Grid View"
            >
              <Grid className="w-3 h-3" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${viewMode === 'list'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
              title="List View"
            >
              <List className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside
            className={`w-full md:w-64 flex-shrink-0 ${showMobileFilters ? 'block' : 'hidden md:block'
              }`}
          >
            <div className="bg-white rounded-[2px] shadow-sm p-4">
              <h2 className="font-semibold text-lg mb-4">Filters</h2>
              <Filters onFilterChange={handleFilterChange} initialFilters={filters} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {products.length > 0 ? (
              <>
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
                      : 'flex flex-col gap-4'
                  }
                >
                  {products.map(product => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={`৳${product.price}`}
                      oldPrice={`৳${product.oldPrice || product.price}`}
                      discount={
                        product.oldPrice
                          ? `-${Math.round(
                            ((product.oldPrice - product.price) / product.oldPrice) * 100
                          )}%`
                          : ''
                      }
                      image={product.image}
                    />
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button className="px-8 py-3 bg-orange-500 text-white rounded-[2px] hover:bg-orange-600 transition-colors font-medium">
                    Load More Products
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-[2px] shadow-sm p-12 text-center">
                <p className="text-gray-500 text-lg mb-2">No products found</p>
                <p className="text-gray-400 text-sm">Try adjusting your filters</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
