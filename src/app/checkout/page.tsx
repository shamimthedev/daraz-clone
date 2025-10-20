// app/checkout/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import Breadcrumb from '@/components/Breadcrumb';
import { CreditCard, Banknote, MapPin, Phone, User, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'cod', // 'cod' or 'bank'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle redirect logic
  useEffect(() => {
    if (isMounted && items.length === 0 && !isPlacingOrder) {
      router.push('/cart');
    }
  }, [items.length, isPlacingOrder, router, isMounted]);

  const subtotal = Math.round(getTotalPrice());
  const deliveryCharge = 70;
  const total = subtotal + deliveryCharge;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^01[0-9]{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid Bangladesh phone number';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);
    setIsPlacingOrder(true);

    // Create order data
    const orderData = {
      orderId: `ORD-${Date.now()}`,
      items,
      customer: formData,
      total,
      paymentMethod: formData.paymentMethod,
      orderDate: new Date().toISOString(),
    };

    // Store order in localStorage (for demo purposes)
    localStorage.setItem('lastOrder', JSON.stringify(orderData));

    // Set a flag to indicate order is being processed
    localStorage.setItem('orderProcessing', 'true');

    // Simulate order processing
    setTimeout(() => {
      // Navigate to success page
      router.push('/checkout/success');
    }, 2000);
  };

  // Show loading state while mounting or if cart is empty
  if (!isMounted || (items.length === 0 && !isPlacingOrder)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb
          items={[
            { label: 'Shopping Cart', href: '/cart' },
            { label: 'Checkout' }
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <div className="bg-white rounded-[2px] shadow-sm p-6">
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold text-gray-900">Shipping Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-[2px] focus:outline-none focus:ring-2 focus:ring-primary ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-[2px] focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-[2px] focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="01XXXXXXXXX"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full px-4 py-3 border rounded-[2px] focus:outline-none focus:ring-2 focus:ring-primary ${errors.address ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="House/Flat no, Street, Area"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-[2px] focus:outline-none focus:ring-2 focus:ring-primary ${errors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                    >
                      <option value="">Select City</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chittagong">Chittagong</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Barisal">Barisal</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Mymensingh">Mymensingh</option>
                    </select>
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-[2px] focus:outline-none focus:ring-2 focus:ring-primary ${errors.postalCode ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="1000"
                    />
                    {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-[2px] shadow-sm p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
                </div>

                <div className="space-y-3">
                  {/* Cash on Delivery */}
                  <label className="flex items-start gap-3 p-4 border-2 rounded-[2px] cursor-pointer transition-all hover:border-primary">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-primary focus:ring-primary"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Banknote className="w-5 h-5 text-gray-600" />
                        <span className="font-semibold text-gray-900">Cash on Delivery</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Pay when you receive your order</p>
                    </div>
                  </label>

                  {/* Bank Transfer */}
                  <label className="flex items-start gap-3 p-4 border-2 rounded-[2px] cursor-pointer transition-all hover:border-primary">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-primary focus:ring-primary"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-gray-600" />
                        <span className="font-semibold text-gray-900">Bank Transfer / Mobile Banking</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        bKash, Nagad, Rocket, or Bank Transfer
                      </p>
                      {formData.paymentMethod === 'bank' && (
                        <div className="mt-3 p-3 bg-orange-50 border border-orange-200 rounded text-sm">
                          <p className="font-medium text-gray-900 mb-1">Payment Instructions:</p>
                          <p className="text-gray-700">After placing the order, you'll receive payment details via email and SMS.</p>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-[2px] shadow-sm p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

                {/* Items List */}
                <div className="space-y-3 mb-4 pb-4 border-b border-gray-200 max-h-64 overflow-y-auto">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 line-clamp-2">{item.name}</p>
                        <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold text-gray-900">৳{Math.round(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">৳{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Delivery Charge</span>
                    <span className="font-semibold">৳{deliveryCharge}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
                  <span>Total</span>
                  <span className="text-primary">৳{total}</span>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-primary text-white py-3 rounded-[2px] font-semibold hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  By placing your order, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}