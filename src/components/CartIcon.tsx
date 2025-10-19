// components/CartIcon.tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function CartIcon() {
  const [mounted, setMounted] = useState(false);
  
  const items = useCartStore((state) => state.items);
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link 
      href="/cart" 
      className="relative hover:opacity-80 transition-opacity"
    >
      <ShoppingCart size={30} className="text-gray-700" />
      {mounted && totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </Link>
  );
}