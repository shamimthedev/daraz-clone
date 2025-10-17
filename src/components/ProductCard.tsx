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

export function ProductCard({ name, price, oldPrice, discount, image }: ProductCardProps) {
  return (
    <Link href="#" className="group block h-full">
      <div className="bg-white shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full">
        <div className="relative w-full aspect-square">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
          />
        </div>
        <div className="p-2 flex-1 flex flex-col">
          <p className="text-sm text-black mb-1 line-clamp-2 flex-1">{name}</p>
          <div>
            <p className="text-[#f57224] text-lg font-semibold">{price}</p>
            <div className="flex gap-2 text-sm">
              <span className="text-[#9e9e9e] line-through">{oldPrice}</span>
              <span className="text-[#212121]">{discount}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}