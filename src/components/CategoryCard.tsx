import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardProps {
  id: number
  name: string
  image: string
  isFirstRow: boolean
  isFirstCol: boolean
}

export function CategoryCard({ name, image, isFirstRow, isFirstCol }: CategoryCardProps) {
  return (
    <Link href="#g" className="block">
      <div
        className={`bg-white p-4 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 border-t border-l border-[#e2e2e2] h-[148px] flex flex-col items-center justify-center
          ${isFirstRow ? '!border-t-0' : ''}
          ${isFirstCol ? '!border-l-0' : ''}
        `}
      >
        <div className="flex-shrink-0 mb-2">
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="w-[80px] h-[80px] mx-auto block object-contain"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
            loading="lazy"
          />
        </div>
        <p className="text-xs text-dark leading-tight line-clamp-2">{name}</p>
      </div>
    </Link>
  )
}