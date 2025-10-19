// lib/mockReviews.ts
import { Review } from '@/types/products';

export const mockReviews: Review[] = [
  {
    id: 1,
    userName: 'Ahmed Rahman',
    rating: 5,
    date: '2024-10-15T10:30:00Z',
    title: 'Excellent product!',
    comment: 'This product exceeded my expectations. Great quality and fast delivery. Highly recommend to everyone looking for this type of product.',
    helpful: 24,
    verified: true,
    images: ['/assets/img/reviews/review1.jpg']
  },
  {
    id: 2,
    userName: 'Fatima Khatun',
    rating: 4,
    date: '2024-10-12T14:20:00Z',
    title: 'Good value for money',
    comment: 'Pretty good product overall. The quality is decent and the price is reasonable. Only minor issue is the packaging could be better.',
    helpful: 18,
    verified: true
  },
  {
    id: 3,
    userName: 'Karim Hossain',
    rating: 5,
    date: '2024-10-10T09:15:00Z',
    comment: 'Amazing! Exactly what I was looking for. Will buy again.',
    helpful: 31,
    verified: true
  },
  {
    id: 4,
    userName: 'Nusrat Jahan',
    rating: 3,
    date: '2024-10-08T16:45:00Z',
    title: 'Average quality',
    comment: 'It\'s okay for the price. Not the best quality but works fine. Delivery was a bit slow.',
    helpful: 7,
    verified: false
  },
  {
    id: 5,
    userName: 'Rahim Uddin',
    rating: 5,
    date: '2024-10-05T11:00:00Z',
    title: 'Perfect!',
    comment: 'No complaints at all. This is exactly as described in the listing. Very happy with my purchase.',
    helpful: 42,
    verified: true,
    images: ['/assets/img/reviews/review2.jpg', '/assets/img/reviews/review3.jpg']
  },
  {
    id: 6,
    userName: 'Sabrina Akter',
    rating: 4,
    date: '2024-10-02T13:30:00Z',
    comment: 'Good product. Would recommend to friends and family.',
    helpful: 15,
    verified: true
  }
];

// Mock product details/specifications
export const mockProductDetails = {
  description: `This premium quality product is designed to meet your everyday needs with exceptional performance and durability. 
  
  Crafted with attention to detail, it combines functionality with style to provide you with the best user experience. Whether you're using it at home, office, or on the go, this product delivers consistent results.
  
  Features include high-quality materials, ergonomic design, and long-lasting performance. Perfect for daily use and backed by our quality guarantee.`,
  
  specifications: [
    { label: 'Material', value: 'Premium Quality Fabric' },
    { label: 'Dimensions', value: '30cm x 20cm x 10cm' },
    { label: 'Weight', value: '500g' },
    { label: 'Color Options', value: 'Multiple colors available' },
    { label: 'Care Instructions', value: 'Machine washable, gentle cycle' },
    { label: 'Country of Origin', value: 'Bangladesh' },
    { label: 'Manufacturer', value: 'Certified Manufacturer' },
    { label: 'Package Contents', value: '1 x Product, 1 x User Manual' }
  ]
};