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
  { id: 1, name: '1 Pair Arm hand Sleeves For Fashion cycling biking running arm sun protection sleeves', price: '$134', oldPrice: '$550', discount: '-70%', image: '/assets/img/f1.jpg' },
  { id: 2, name: 'Wireless Bluetooth Earbuds with Charging Case', price: '$29', oldPrice: '$99', discount: '-71%', image: '/assets/img/f2.jpg' },
  { id: 3, name: '1 Pair Arm hand Sleeves For Fashion cycling biking...', price: '$134', oldPrice: '$550', discount: '-70%', image: '/assets/img/f3.jpg' },
  { id: 4, name: '1 Pair Arm hand Sleeves For Fashion cycling biking...', price: '$134', oldPrice: '$550', discount: '-70%', image: '/assets/img/f4.jpg' },
  { id: 5, name: '1 Pair Arm hand Sleeves For Fashion cycling biking...', price: '$134', oldPrice: '$550', discount: '-70%', image: '/assets/img/f5.jpg' },
  { id: 6, name: '1 Pair Arm hand Sleeves For Fashion cycling biking...', price: '$134', oldPrice: '$550', discount: '-70%', image: '/assets/img/3332e7f6660024139b771287ccba37e3.jpg' },
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 7 + i,
    name: 'More Products Here...',
    price: '$134',
    oldPrice: '$550',
    discount: '-70%',
    image: `/assets/img/f${(i % 5) + 1}.jpg`
  })),
]

export function JustForYou() {
  return (
    <section id="Categories_section" className="py-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="font-bold text-[#424242] text-[22px] mb-2">
          <span>Just For You</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 auto-rows-fr">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-6">
          <Link href="#" className="inline-block px-8 py-2 border border-primary text-primary bg-white rounded hover:text-white hover:bg-primary ">
            <b>Load More</b>
          </Link>
        </div>
      </div>
    </section>
  )
}