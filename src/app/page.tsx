import { HeroSection } from '@/components/sections/HeroSection'
import { FlashSale } from '@/components/sections/FlashSale'
import { JustForYou } from '@/components/sections/JustForYou'
import { CategoriesGrid } from '@/components/sections/CategoriesGrid'

export default function HomePage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen">
      <HeroSection />
      <FlashSale />
      <CategoriesGrid />
      <JustForYou />
    </main>
  )
}