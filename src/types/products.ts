export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  brand: string;
  category?: string;
  size?: string;
  color?: string;
  rating: number; // 1-5
  shippedFrom: string;
  warranty: 'No Warranty' | 'Seller Warranty' | 'Brand Warranty' | 'International Seller Warranty';
  deliveryOption: boolean; // true for Yes
  promotions: string[]; // e.g., ['Flash Sale', 'Free Delivery']
}

export interface Filters {
  categories: string[];
  brands: string[];
  sizes: string[];
  promotions: string[];
  shippedFrom: string[];
  minPrice: number;
  maxPrice: number;
  rating: number; // 0 for no filter, 1-5
  colors: string[];
  warranty: string[];
  deliveryOption: boolean | null;
}