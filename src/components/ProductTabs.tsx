// components/ProductTabs.tsx
'use client';
import { useState } from 'react';
import { Star, ThumbsUp, CheckCircle, User } from 'lucide-react';
import { Review, ProductSpecification } from '@/types/products';

interface ProductTabsProps {
  description: string;
  specifications: ProductSpecification[];
  reviews: Review[];
  averageRating: number;
}

type TabType = 'details' | 'reviews';

export default function ProductTabs({ 
  description, 
  specifications, 
  reviews,
  averageRating 
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('details');

  // Calculate review statistics
  const reviewStats = {
    total: reviews.length,
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }, (_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'fill-current' : ''}`} 
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm mt-6">
      {/* Tabs Header */}
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-6 py-4 font-medium text-sm transition-colors relative ${
              activeTab === 'details'
                ? 'text-orange-600 border-b-2 border-orange-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Product Details
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-4 font-medium text-sm transition-colors relative ${
              activeTab === 'reviews'
                ? 'text-orange-600 border-b-2 border-orange-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Reviews ({reviews.length})
          </button>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="p-6">
        {activeTab === 'details' && (
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                {description}
              </div>
            </div>

            {/* Specifications */}
            {specifications.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr 
                          key={index}
                          className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                        >
                          <td className="px-4 py-3 text-sm font-medium text-gray-600 w-1/3">
                            {spec.label}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-6">
            {/* Reviews Summary */}
            <div className="flex flex-col md:flex-row gap-6 pb-6 border-b border-gray-200">
              {/* Average Rating */}
              <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6 md:w-64">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex text-yellow-400 mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'fill-current' : ''}`} 
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  {reviewStats.total} ratings
                </div>
              </div>

              {/* Rating Breakdown */}
              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((star) => {
                  const count = reviewStats[star as keyof typeof reviewStats];
                  const percentage = reviewStats.total > 0 
                    ? (count / reviewStats.total) * 100 
                    : 0;
                  
                  return (
                    <div key={star} className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 w-8">{star} ★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-400 transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                  {/* Review Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-gray-900">
                          {review.userName}
                        </span>
                        {review.verified && (
                          <span className="flex items-center gap-1 text-xs text-green-600">
                            <CheckCircle className="w-3 h-3" />
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-500">
                          {formatDate(review.date)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="ml-13">
                    {review.title && (
                      <h4 className="font-medium text-gray-900 mb-2">
                        {review.title}
                      </h4>
                    )}
                    <p className="text-gray-700 mb-3">{review.comment}</p>

                    {/* Review Images */}
                    {review.images && review.images.length > 0 && (
                      <div className="flex gap-2 mb-3">
                        {review.images.map((img, idx) => (
                          <div 
                            key={idx}
                            className="w-20 h-20 rounded-lg bg-gray-100 border border-gray-200"
                          >
                            {/* Placeholder for review images */}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Helpful Button */}
                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Reviews State */}
            {reviews.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-2">
                  <Star className="w-12 h-12 mx-auto" />
                </div>
                <p className="text-gray-600">No reviews yet</p>
                <p className="text-sm text-gray-500">Be the first to review this product</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}