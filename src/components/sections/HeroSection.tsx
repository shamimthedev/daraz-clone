'use client'

import Image from 'next/image'  
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export function HeroSection() {
  const bannerImages = [
    '/assets/img/banner/banner-1.jpg', 
    '/assets/img/banner/banner-3.jpg',
    '/assets/img/banner/banner-4.jpg',
    '/assets/img/banner/banner-5.jpg',
    '/assets/img/banner/banner-6.jpg',
    '/assets/img/banner/banner-7.jpg',
  ]

  return (
    <section id="banner_section" className="bg-[#f5f5f5] py-4">  
      <div className="container mx-auto">
        <div className="flex gap-4 h-64 md:h-[356px]">  
          {/* Left: Banner Slider (flexible width) */}
          <div className="flex-1 relative rounded overflow-hidden">  
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              fadeEffect={{ crossFade: true }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                renderBullet: (index, className) => `<span class="${className} w-3 h-3 bg-white rounded-full mx-1 block"></span>`,
              }}
              className="h-full"  
            >
              {bannerImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt={`Banner ${index + 1}`}
                    fill  
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"  
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Dots: Bottom-center on slider only */}
            <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10" />
          </div>

          {/* Right: Static App Promo (200px width on desktop, hidden on mobile) */}
          <div className="hidden md:block w-[200px] relative rounded overflow-hidden">
            <Image
              src="/assets/img/banner/sidebar.png"
              alt="Download the Daraz App"
              fill
              className="object-cover"
              sizes="200px"
              priority  
            />
          </div>
        </div>
      </div>
    </section>
  )
}