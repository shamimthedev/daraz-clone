'use client'

import { useState } from 'react'
import { ChevronRight, Search } from 'lucide-react'
import Link from 'next/link'

interface MenuItem {
  label: string
  href: string
  children?: MenuItem[]
}

const menuData: MenuItem[] = [  
  {
    label: 'Electronic Devices',
    href: 'javascript:void(0)',
    children: [
      { label: 'TV & Home Appliances', href: 'javascript:void(0)' },
      { label: 'Health & Beauty', href: '' },
      {
        label: 'Babies & Toys',
        href: 'javascript:void(0)',
        children: [
          { label: 'TV & Home Appliances', href: '' },
          { label: 'Health & Beauty', href: '' },
          { label: 'Babies & Toys', href: '' },
          { label: "Women's Fashion", href: '' },
          { label: "Men's Fashion", href: '' },
          { label: 'Watches & Accessories', href: '' },
          { label: 'Sports & Outdoor', href: '' },
          { label: 'Automotive & Motorbike', href: '' },
          { label: 'Groceries & Pets', href: '' },
          { label: 'Home & Lifestyle', href: '' },
        ],
      },
      { label: 'Groceries & Pets', href: '' },
      { label: 'Home & Lifestyle', href: '' },
      { label: "Women's Fashion", href: '' },
      { label: "Men's Fashion", href: '' },
      { label: 'Watches & Accessories', href: '' },
      { label: 'Sports & Outdoor', href: '' },
      { label: 'Automotive & Motorbike', href: '' },
    ],
  },
  { label: 'TV & Home Appliances', href: '' },
  { label: 'Health & Beauty', href: '' },
  { label: 'Babies & Toys', href: '' },
  { label: 'Groceries & Pets', href: '' },
  { label: 'Home & Lifestyle', href: '' },
  { label: "Women's Fashion", href: '' },
  { label: "Men's Fashion", href: '' },
  { label: 'Watches & Accessories', href: '' },
  { label: 'Sports & Outdoor', href: '' },
  { label: 'Automotive & Motorbike', href: '' },
]

const topLinks = ['SAVE MORE ON APP', 'Become a Seller', 'Help & Support', 'LOGIN', 'SIGNUP', 'ভাষা']

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set())

  const toggleMenu = (label: string) => {
    const newSet = new Set(openMenus)
    if (newSet.has(label)) {
      newSet.delete(label)
    } else {
      newSet.add(label)
    }
    setOpenMenus(newSet)
  }

  const renderMenuItem = (item: MenuItem, level: number = 0) => (
    <li key={item.label} className={`relative ${level > 0 ? 'ml-4 border-l border-gray-200 pl-4' : ''}`}>
      <button
        onClick={() => toggleMenu(item.label)}
        className="w-full text-left py-2 px-2 text-gray-700 flex justify-between items-center hover:bg-gray-100 rounded transition"
      >
        <span className="text-sm">{item.label}</span>
        {item.children && (
          <ChevronRight 
            size={14} 
            className={`transition-transform ${openMenus.has(item.label) ? 'rotate-90' : ''}`} 
          />
        )}
      </button>
      {item.children && openMenus.has(item.label) && (
        <ul className={`mt-1 space-y-1 bg-white border border-gray-200 rounded-md ${level > 0 ? 'ml-4 static w-full' : 'absolute left-0 top-full bg-white shadow-lg w-48 z-10'}`}>
          {item.children.map((child) => renderMenuItem(child, level + 1))}
        </ul>
      )}
    </li>
  )

  return (
    <div className="fixed top-20 left-0 w-full h-[90vh] bg-white z-40 overflow-auto p-4 transition-all duration-350">
      {/* Mobile Search */}
      <form className="mb-4 bg-primary rounded-md overflow-hidden flex">
        <input
          type="text"
          placeholder="Search in Daraz"
          className="w-4/5 px-4 py-2 text-white bg-primary/80 outline-none placeholder-white/70"
        />
        <button type="submit" className="w-1/5 bg-primary text-white flex items-center justify-center">
          <Search size={20} />
        </button>
      </form>

      {/* Category Menu */}
      <ul className="space-y-1 mb-4">
        {menuData.map((item) => renderMenuItem(item))}
      </ul>

      {/* Bottom Links Row */}
      <div className="border-t pt-4 text-center space-x-4 text-sm text-gray-600">
        {topLinks.map((link) => (
          <Link key={link} href="#" className="inline-block px-2 hover:text-primary transition" onClick={onClose}>
            {link}
          </Link>
        ))}
      </div>
    </div>
  )
}