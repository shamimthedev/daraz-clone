import Image from 'next/image'
import Link from 'next/link'

const customerCareLinks = [
  { name: 'Help Center', href: '/' },
  { name: 'How to Buy', href: '/' },
  { name: 'Returns & Refunds', href: '/' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Terms & Conditions', href: '/' }
]

const earnLinks = [
  { name: 'Daraz University', href: '/' },
  { name: 'Sell on Daraz', href: '/' },
  { name: 'Code of Conduct', href: '/' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Join the Daraz Affiliate Program', href: '/' }
]

const darazLinks = [
  { name: 'About Daraz', href: '/about' },
  { name: 'Digital Payments', href: '/' },
  { name: 'Careers', href: '/' },
  { name: 'Daraz Blog', href: '/blog' },
  { name: 'Amar Daraz', href: '/' },
  { name: 'dMart', href: '/' },
  { name: 'Privacy Policy', href: '/' },
  { name: 'Daraz App', href: '/' },
  { name: 'Daraz Exclusives', href: '/' },
  { name: 'Hungrynaki Food Delivery', href: '/' },
  { name: 'BD Cricket Live', href: '/' }
]

export function Footer() {
  return (
    <footer className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Col: Customer Care + Earn */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <p className="text-primary font-bold text-lg mb-2">Customer Care</p>
              <ul className="space-y-1 text-sm">
                {customerCareLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:underline text-gray-700 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-primary font-bold text-lg mb-2">Earn With Daraz</p>
              <ul className="space-y-1 text-sm">
                {earnLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:underline text-gray-700 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mid Col: Daraz Links */}
          <div className="md:col-span-1 space-y-8">
            <p className="text-primary font-bold text-lg mb-2">Daraz</p>
            <ul className="space-y-1 text-sm">
              {darazLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:underline text-gray-700 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Col: App Promo */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-5 mb-5"> 
              <div>
                <Image
                  src="/assets/img/footer/qr.webp"
                  alt="QR Code"
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
              <div>
                <Image
                  src="/assets/img/footer/applogo.png"
                  alt="Daraz App Logo"
                  width={38}
                  height={38}
                  className="mb-1"
                />
                <p className="text-primary font-bold text-base m-0">Happy Shopping</p>
                <p className="text-gray-600 text-xs m-0">Download App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}