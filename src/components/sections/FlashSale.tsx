import Link from 'next/link'
import { ProductCard } from '../ProductCard'

interface Product {
  id: number
  name: string
  price: string
  oldPrice: string
  discount: string
  image: string
}

const products: Product[] = [
  {
    id: 293299086,
    name: 'Chinese trolley luggage bag 20" easy size with two colour option trolley luggage bag',
    price: '৳979',
    oldPrice: '৳1,990',
    discount: '-51%',
    image: '/assets/img/flashsale/01.jpg'
  },
  {
    id: 529225489,
    name: 'Realme Note 60x - (4GB + 64GB)',
    price: '৳10,249',
    oldPrice: '৳10,999',
    discount: '-7%',
    image: '/assets/img/flashsale/02.jpg'
  },
  {
    id: 528772291,
    name: 'Yes Synthetic Detergent Powder Lemon 1 kg.',
    price: '৳85',
    oldPrice: '৳150',
    discount: '-43%',
    image: '/assets/img/flashsale/03.jpg'
  },
  {
    id: 388165100,
    name: 'Premium Quality Home tex synthetic Curtain, (4 khuci) Porda, parda for Home Decoration Door and window From Suba International',
    price: '৳163',
    oldPrice: '৳589',
    discount: '-72%',
    image: '/assets/img/flashsale/04.jpg'
  },
  {
    id: 112200968,
    name: 'Marks Full Cream Milk Powder - 500gm',
    price: '৳440',
    oldPrice: '৳475',
    discount: '-7%',
    image: '/assets/img/flashsale/05.jpg'
  },
  {
    id: 323958067,
    name: 'GEO Bag 15 Gallon -1 PCS (dia 18" hight 14"-)  Plant Grow Bags, Synthetic Pot',
    price: '৳164',
    oldPrice: '৳300',
    discount: '-45%',
    image: '/assets/img/flashsale/06.jpg'
  }
]

export function FlashSale() {

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
            <Link href="#more" className="app_btn text-primary uppercase border border-primary px-4 py-2 rounded-[2px] text-sm hover:bg-primary hover:text-white transition-all">
              Shop All Products
            </Link>
          </h1>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2 auto-rows-fr">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}