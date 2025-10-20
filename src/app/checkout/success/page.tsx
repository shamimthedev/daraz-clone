// app/checkout/success/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Package, Home, Mail, Phone } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

interface OrderData {
  orderId: string;
  items: Array<{
    id: number;
    name: string;
    image: string;
    quantity: number;
    price: number;
  }>;
  customer: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    paymentMethod: string;
  };
  total: number;
  orderDate: string;
}

export default function OrderSuccessPage() {
  const router = useRouter();
  const { clearCart } = useCartStore();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Get order data from localStorage
    const lastOrder = localStorage.getItem('lastOrder');
    const orderProcessing = localStorage.getItem('orderProcessing');

    if (!lastOrder) {
      router.push('/');
      return;
    }

    setOrderData(JSON.parse(lastOrder));

    // Clear the cart now that we've loaded the order data
    if (orderProcessing === 'true') {
      // Small delay to ensure order data is loaded first
      setTimeout(() => {
        clearCart();
        localStorage.removeItem('orderProcessing');
        // Force a storage event to update all components
        window.dispatchEvent(new Event('storage'));
      }, 100);
    }
  }, [router, clearCart]);

  // Separate useEffect for countdown and redirect
  useEffect(() => {
    if (!orderData) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [orderData]);

  // Separate useEffect for navigation when countdown reaches 0
  useEffect(() => {
    if (countdown === 0) {
      router.push('/');
    }
  }, [countdown, router]);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const paymentMethodLabel = orderData.customer.paymentMethod === 'cod'
    ? 'Cash on Delivery'
    : 'Bank Transfer / Mobile Banking';

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Success Icon & Message */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Order Placed Successfully!
          </h1>
          <p className="text-lg text-gray-600">
            Thank you for your purchase, {orderData.customer.fullName}
          </p>
        </div>

        {/* Order ID Card */}
        <div className="bg-white rounded-[2px] shadow-sm p-6 mb-6 text-center border-2 border-primary">
          <p className="text-sm text-gray-600 mb-1">Order Number</p>
          <p className="text-2xl font-bold text-primary">{orderData.orderId}</p>
          <p className="text-sm text-gray-600 mt-2">
            Please save this order number for tracking your order
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-[2px] shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" />
            Order Details
          </h2>

          {/* Items */}
          <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
            {orderData.items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 line-clamp-2">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-sm font-semibold text-gray-900">
                    ৳{Math.round(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Total Amount</span>
            <span className="text-primary">৳{orderData.total}</span>
          </div>
        </div>

        {/* Delivery & Payment Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Delivery Address */}
          <div className="bg-white rounded-[2px] shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Home className="w-5 h-5 text-primary" />
              Delivery Address
            </h3>
            <div className="text-sm text-gray-700 space-y-1">
              <p className="font-medium">{orderData.customer.fullName}</p>
              <p>{orderData.customer.address}</p>
              <p>{orderData.customer.city}, {orderData.customer.postalCode}</p>
              <p className="flex items-center gap-1 mt-2">
                <Phone className="w-4 h-4" />
                {orderData.customer.phone}
              </p>
              <p className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {orderData.customer.email}
              </p>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-[2px] shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-3">Payment Method</h3>
            <p className="text-gray-700 font-medium mb-2">{paymentMethodLabel}</p>

            {orderData.customer.paymentMethod === 'cod' ? (
              <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm text-gray-700">
                <p className="font-medium mb-1">💵 Cash on Delivery</p>
                <p>Please keep ৳{orderData.total} ready when your order arrives.</p>
              </div>
            ) : (
              <div className="bg-orange-50 border border-orange-200 rounded p-3 text-sm text-gray-700">
                <p className="font-medium mb-1">📱 Payment Instructions</p>
                <p>We've sent payment details to your email and SMS. Please complete the payment within 24 hours.</p>
              </div>
            )}
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-gradient-to-r from-primary to-orange-600 rounded-[2px] p-6 text-white mb-6">
          <h3 className="text-xl font-bold mb-3">What happens next?</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-lg">✉️</span>
              <span>You'll receive an order confirmation email shortly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg">📦</span>
              <span>We'll prepare your order for delivery within 1-2 business days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg">🚚</span>
              <span>Your order will be delivered within 3-5 business days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg">📱</span>
              <span>You can track your order using the order number</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="flex-1 bg-primary text-white text-center py-3 px-6 rounded-[2px] font-semibold hover:bg-orange-700 transition-colors"
          >
            Continue Shopping
          </Link>
          <button
            onClick={() => window.print()}
            className="flex-1 bg-white text-primary border-2 border-primary text-center py-3 px-6 rounded-[2px] font-semibold hover:bg-orange-50 transition-colors"
          >
            Print Order Details
          </button>
        </div>

        {/* Auto Redirect Notice */}
        <div className="text-center mt-6 text-sm text-gray-600">
          You will be redirected to homepage in {countdown} seconds...
        </div>
      </div>
    </div>
  );
}