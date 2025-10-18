import Link from 'next/link'
import { ProductCard } from '../ProductCard'
import { sampleProducts } from '@/lib/products'

export function FlashSale() {
  // Filter products with Flash Sale promotion
  const flashSaleProducts = sampleProducts
    .filter(product => product.promotions.includes('Flash Sale'))
    .slice(0, 6);

  return (
    <section className="py-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="font-bold text-[#424242] text-[22px] mb-2">
          <span>Flash Sale</span>
        </div>
        <div className="bg-white">
          <h1 className="flex justify-between items-center flex-wrap text-primary px-3 py-2 border-b border-slate-200">
            <span className='font-semibold text-sm'>On Sale Now</span>
            <Link href="/products" className="app_btn text-primary uppercase border border-primary px-4 py-2 rounded-[2px] text-sm hover:bg-primary hover:text-white transition-all">
              Shop All Products
            </Link>
          </h1>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2 auto-rows-fr">
            {flashSaleProducts.map((product) => (
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
        </div>
      </div>
    </section>
  )
}