'use client'

import { useState } from 'react'
import { Menu, Search as SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'
import CartIcon from './CartIcon'

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    return (
        <>
            {/* Top Header Links */}
            <section className="bg-white py-2 px-4 text-xs text-dark hidden sm:block">
                <div className="container mx-auto flex justify-end space-x-4">
                    {['SAVE MORE ON APP', 'Become a Seller', 'Help & Support', 'LOGIN', 'SIGNUP', 'ভাষা'].map((link) => (
                        <Link key={link} href="#" className="hover:text-primary transition-colors">
                            {link}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Main Nav */}
            <header className="bg-white sticky top-0 left-0 z-50 shadow-sm py-2 pb-8 px-4">
                <nav className="container mx-auto flex items-center justify-between">
                    <div className="w-1/5">
                        <Link href="/" className="block w-32">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.9 71.59" className="w-full h-auto">
                                <path d="M185.69 52.57H177l9-27.76a1 1 0 0 0-1-1.4h-18.66a1.11 1.11 0 0 0-1.21 1.21v4.71a1.11 1.11 0 0 0 1.21 1.21H174l-9 27.75a1 1 0 0 0 1 1.41h19.67a1.11 1.11 0 0 0 1.21-1.21v-4.71a1.11 1.11 0 0 0-1.19-1.21ZM162.33 54V24.62a1.11 1.11 0 0 0-1.21-1.21h-7.19a1.13 1.13 0 0 0-1.28 1.21v2.55H152c-.63-2.68-2.54-4.2-6-4.2-5.28 0-8.27 3.43-8.27 14.83v7.57c0 11.4 2.93 14.77 8.27 14.77 3.82 0 5.93-1.78 6.5-5.09h.76l.83 3.56a1.31 1.31 0 0 0 1.34 1.09H162c.89 0 1.21-.58 1.08-1.34Zm-9.68-6.75c0 4.71-.76 5.73-2.61 5.73s-2.54-1-2.54-5.66v-12c0-4.71.82-5.73 2.54-5.73s2.61 1 2.61 5.79ZM134.51 23.47l-6.94 5h-.44v-3.85a1.11 1.11 0 0 0-1.21-1.21h-6.81a1.11 1.11 0 0 0-1.21 1.21v33.87a1.11 1.11 0 0 0 1.21 1.21h7.25a1.08 1.08 0 0 0 1.21-1.21V38.18l7.64-5.48a1.62 1.62 0 0 0 .76-1.46v-7c.03-.96-.7-1.34-1.46-.77ZM114.33 54V24.62a1.11 1.11 0 0 0-1.21-1.21h-7.19a1.12 1.12 0 0 0-1.27 1.21v2.55H104c-.64-2.68-2.55-4.2-6-4.2-5.28 0-8.28 3.43-8.28 14.83v7.57c0 11.4 2.93 14.77 8.28 14.77 3.82 0 5.92-1.78 6.49-5.09h.77l.82 3.56a1.31 1.31 0 0 0 1.34 1.09H114c.9 0 1.21-.58 1.09-1.34Zm-9.67-6.75c0 4.71-.77 5.73-2.61 5.73s-2.55-1-2.55-5.66v-12c0-4.71.83-5.73 2.55-5.73s2.61 1 2.61 5.79ZM71.49 11.32H61.05a1.07 1.07 0 0 0-1.21 1.21v46a1.08 1.08 0 0 0 1.21 1.21h10.44c10.38 0 15.15-4.72 15.15-21v-6.42c0-16.74-5.09-21-15.15-21Zm5 31.82c0 7.13-1.34 8.53-4.71 8.53h-1.94V19.15h1.91c3.37 0 4.71 1.21 4.71 8.53ZM40.71 10.61 22.79.29c-1.05-.63-1.88-.21-1.88 1.05v22l17.81 10.27c1.05.63 1.05 1.57 0 2.2L22.79 45c-1.05.63-1.88.21-1.88-1V23.34L1.1 34.77A1.94 1.94 0 0 0 0 36.65v21.9a2 2 0 0 0 1.1 1.89l18.71 10.79a1.86 1.86 0 0 0 2.2 0l18.7-10.79a2 2 0 0 0 1.1-1.89v-46a2 2 0 0 0-1.1-1.94Z" fill="#f85606"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="hidden md:flex w-4/5 gap-8 items-center">
                        <form className="w-3/4 bg-bg rounded-sm overflow-hidden flex">
                            <input type="text" placeholder="Search in Daraz" className="w-full px-4 py-2 bg-transparent outline-none placeholder:text-sm" />
                            <button type="submit" className="w-12 bg-primary text-white flex items-center justify-center">
                                <SearchIcon size={20} />
                            </button>
                        </form>
                        <div className="flex items-center space-x-4">
                            <CartIcon />
                        </div>
                    </div>
                    <div className="md:hidden flex items-center space-x-4">
                        <CartIcon />
                        <button onClick={toggleMobileMenu}>
                            <Menu size={24} />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <>
                    <div className="md:hidden fixed inset-0 bg-black/50 z-30" onClick={toggleMobileMenu} />
                    <MobileMenu onClose={toggleMobileMenu} />
                </>
            )}
        </>
    )
}