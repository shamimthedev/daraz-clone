// app/cart/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import Breadcrumb from '@/components/Breadcrumb';
import toast from 'react-hot-toast';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();
  const totalPrice = Math.round(getTotalPrice());
  const deliveryCharge = 70;
  const finalTotal = totalPrice + (items.length > 0 ? deliveryCharge : 0);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: number, name: string) => {
    removeItem(id);
    toast.success(`${name} removed from cart`);
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
      toast.success('Cart cleared');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: 'Shopping Cart' }]} />
          
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add items to get started</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-[2px] hover:bg-orange-600 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: 'Shopping Cart' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900">
                Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
              </h1>
              <button
                onClick={handleClearCart}
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Clear Cart
              </button>
            </div>

            {/* Cart Items List */}
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <Link href={`/products/${item.id}`} className="flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link 
                      href={`/products/${item.id}`}
                      className="text-gray-900 font-medium hover:text-orange-600 transition-colors line-clamp-2 mb-1"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-600 mb-2">Brand: {item.brand}</p>
                    
                    {/* Size & Color */}
                    {(item.size || item.color) && (
                      <div className="flex gap-3 text-sm text-gray-600 mb-2">
                        {item.size && <span>Size: {item.size}</span>}
                        {item.color && <span>Color: {item.color}</span>}
                      </div>
                    )}

                    {/* Price */}
                    <p className="text-lg font-bold text-orange-600">৳{item.price}</p>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex flex-col items-end justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-gray-300 rounded-[2px]">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="px-3 py-1 text-gray-500 hover:text-orange-600 hover:bg-gray-50 transition"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 min-w-[2.5rem] text-center border-x border-gray-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-gray-500 hover:text-orange-600 hover:bg-gray-50 transition"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal & Remove */}
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-2">
                        Subtotal: <span className="font-semibold text-gray-900">৳{Math.round(item.price * item.quantity)}</span>
                      </p>
                      <button
                        onClick={() => handleRemoveItem(item.id, item.name)}
                        className="text-red-600 hover:text-red-700 transition-colors flex items-center gap-1 text-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">৳{totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Charge</span>
                  <span className="font-semibold">৳{deliveryCharge}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                <span>Total</span>
                <span className="text-orange-600">৳{finalTotal}</span>
              </div>

              <button className="w-full bg-orange-600 text-white py-3 rounded-[2px] font-semibold hover:bg-orange-700 transition-colors mb-3">
                Proceed to Checkout
              </button>

              <div className="text-xs text-gray-500 text-center">
                Safe and secure checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}