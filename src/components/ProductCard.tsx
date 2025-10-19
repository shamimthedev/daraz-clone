import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: number
  name: string
  price: string
  oldPrice: string
  discount: string
  image: string
}

export function ProductCard({ id, name, price, oldPrice, discount, image }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="group block h-full">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full">
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>
        <div className="p-3 flex-1 flex flex-col">
          <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 flex-1 group-hover:text-orange-600 transition-colors">
            {name}
          </h3>
          <div>
            <p className="text-orange-600 text-lg font-bold mb-1">{price}</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400 line-through">{oldPrice}</span>
              {discount && (
                <span className="text-gray-700 font-medium">{discount}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}