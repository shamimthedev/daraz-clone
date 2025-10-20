// components/ProductDetail.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Star, MapPin, Truck, CreditCard, Package, Clock, Phone, StarHalf } from 'lucide-react';
import { Product } from '@/types/products';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import ProductTabs from '@/components/ProductTabs';
import { mockReviews, mockProductDetails } from '@/lib/mockReviews';
import { useCartStore } from '@/store/cartStore';
import toast from 'react-hot-toast';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand,
      color: product.color,
      size: product.size,
    }, quantity);

    toast.success(`${quantity} item${quantity > 1 ? 's' : ''} added to cart!`);
  };

  const handleBuyNow = () => {
    // Add to cart first
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand,
      color: product.color,
      size: product.size,
    }, quantity);

    // Redirect to cart page
    window.location.href = '/cart';
  };

  // Calculate discount percentage
  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  // Render stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-current" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-current" />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4" />);
    }
    return stars;
  };

  // Build breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Products', href: '/products' },
  ];

  if (product.category) {
    breadcrumbItems.push({ label: product.category, href: `/products?category=${product.category}` });
  }

  breadcrumbItems.push({ label: product.name });

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* 3-Col Grid: Desktop flex, Mobile stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left: Product Image */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2px] shadow-sm p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-96 object-contain rounded-[2px]"
              />
            </div>
          </div>

          {/* Middle: Product Details */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-[2px] shadow-sm p-6">
              {/* Promotions Badges */}
              {product.promotions.length > 0 && (
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {product.promotions.map((promo, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {promo}
                    </span>
                  ))}
                </div>
              )}

              {/* Title & Ratings */}
              <h1 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {renderStars()}
                </div>
                <span className="text-sm text-gray-500">
                  ({product.rating} rating)
                </span>
              </div>

              {/* Brand */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-gray-600">Brand: </span>
                <span className="text-orange-600 font-semibold">{product.brand}</span>
              </div>

              {/* Category */}
              {product.category && (
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-gray-600">Category: </span>
                  <span className="text-gray-700">{product.category}</span>
                </div>
              )}

              {/* Size & Color */}
              <div className="flex gap-4 mb-4">
                {product.size && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">Size: </span>
                    <span className="text-gray-700">{product.size}</span>
                  </div>
                )}
                {product.color && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">Color: </span>
                    <span className="text-gray-700">{product.color}</span>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="space-y-1 mb-6">
                <div className="text-3xl font-bold text-orange-600">৳{product.price}</div>
                {product.oldPrice && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500 line-through">৳{product.oldPrice}</span>
                    <span className="text-green-600">-{discountPercentage}%</span>
                  </div>
                )}
              </div>

              {/* Quantity & Buttons */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-[2px]">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-500 hover:text-orange-600 hover:bg-gray-50 transition"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center border-x border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-500 hover:text-orange-600 hover:bg-gray-50 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 bg-orange-600 text-white py-3 rounded-[2px] font-semibold hover:bg-orange-700 transition"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-orange-500 text-white py-3 rounded-[2px] font-semibold hover:bg-orange-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Delivery Options */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-[2px] shadow-sm p-4 sticky top-4">
              {/* Delivery Address */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">Delivery to</span>
                </div>
                <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                  CHANGE
                </button>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                {product.shippedFrom}, Bangladesh
              </div>

              {/* Delivery Option */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-orange-600" />
                    <span className="font-medium">
                      {product.deliveryOption ? 'Standard Delivery' : 'Pickup Only'}
                    </span>
                  </div>
                  {product.deliveryOption && (
                    <div className="text-right">
                      <div className="text-orange-600 font-semibold">৳70</div>
                      <div className="text-xs text-gray-500">Get by 21-26 Oct</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                <CreditCard className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium">Cash on Delivery Available</span>
              </div>

              {/* Warranty */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium">Warranty</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-3 h-3 text-gray-500" />
                  <span className="text-gray-600">{product.warranty}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-green-600">
                  <Clock className="w-3 h-3" />
                  <span>14 days easy return</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs - Details & Reviews */}
        <ProductTabs
          description={mockProductDetails.description}
          specifications={mockProductDetails.specifications}
          reviews={mockReviews}
          averageRating={product.rating}
        />
      </div>
    </div>
  );
}