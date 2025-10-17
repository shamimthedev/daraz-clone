import Image from 'next/image'
import Link from 'next/link'

const customerCareLinks = [
  'Help Center', 'How to Buy', 'Returns & Refunds', 'Contact Us', 'Terms & Conditions'
]
const earnLinks = [
  'Daraz University', 'Sell on Daraz', 'Code of Conduct', 'Contact Us', 'Join the Daraz Affiliate Program'
]
const darazLinks = [
  'About Daraz', 'Digital Payments', 'Careers', 'Daraz Blog', 'Amar Daraz', 'dMart',
  'Privacy Policy', 'Daraz App', 'Daraz Exclusives', 'Hungrynaki Food Delivery', 'BD Cricket Live'
]

export function Footer() {
  return (
    <footer className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Col: Customer Care + Earn */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <p className="text-primary font-bold text-lg mb-2">Customer Care</p>
              <ul className="space-y-1 text-sm">
                {customerCareLinks.map((link) => (
                  <li key={link}><Link href="#" className="hover:underline">{link}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-primary font-bold text-lg mb-2">Earn With Daraz</p>
              <ul className="space-y-1 text-sm">
                {earnLinks.map((link) => (
                  <li key={link}><Link href="#" className="hover:underline">{link}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mid Col: Daraz Links */}
          <div className="md:col-span-1 space-y-8">
            <p className="text-primary font-bold text-lg mb-2">Daraz</p>
            <ul className="space-y-1 text-sm">
              {darazLinks.map((link) => (
                <li key={link}><Link href="#" className="hover:underline">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Right Col: App Promo */}
          <div className="md:col-span-1 text-white">
            <div className="App_description flex items-end gap-5 mb-5"> 
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
                  className="mb-2"
                />
                <p className="text-primary font-bold text-base m-0">Happy Shopping</p>
                <p className="text-sm m-0">Download App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}