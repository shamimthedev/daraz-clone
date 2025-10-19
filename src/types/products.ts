// types/products.ts
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
  rating: number; 
  shippedFrom: string;
  warranty: 'No Warranty' | 'Seller Warranty' | 'Brand Warranty' | 'International Seller Warranty';
  deliveryOption: boolean;
  promotions: string[];
  description?: string; 
  specifications?: ProductSpecification[]; 
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Review {
  id: number;
  userName: string;
  userImage?: string;
  rating: number; 
  date: string; 
  title?: string;
  comment: string;
  helpful: number; 
  verified: boolean; 
  images?: string[]; 
}

export interface Filters {
  categories: string[];
  brands: string[];
  sizes: string[];
  promotions: string[];
  shippedFrom: string[];
  minPrice: number;
  maxPrice: number;
  rating: number; 
  colors: string[];
  warranty: string[];
  deliveryOption: boolean | null;
}