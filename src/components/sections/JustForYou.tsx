'use client';

import Link from 'next/link'
import { ProductCard } from '../ProductCard'
import { sampleProducts } from '@/lib/products'
import { useState } from 'react'

export function JustForYou() {
  const [displayCount, setDisplayCount] = useState(12);
  
  // Get all products, can be customized based on user preferences
  const products = sampleProducts.slice(0, displayCount);
  const hasMore = displayCount < sampleProducts.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 12, sampleProducts.length));
  };

  return (
    <section id="Categories_section" className="py-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="font-bold text-[#424242] text-[22px] mb-2">
          <span>Just For You</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 auto-rows-fr">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={`৳${product.price}`}
              oldPrice={`৳${product.oldPrice || product.price}`}
              discount={product.oldPrice ? `-${Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%` : ''}
              image={product.image}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-6">
            <button 
              onClick={handleLoadMore}
              className="inline-block px-8 py-2 border border-primary text-primary bg-white rounded hover:text-white hover:bg-primary transition-all"
            >
              <b>Load More</b>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}