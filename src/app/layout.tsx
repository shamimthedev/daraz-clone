import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Daraz - Online Shopping in Bangladesh',
  description: 'Your e-comm clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}