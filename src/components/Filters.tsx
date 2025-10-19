'use client';

import { type Filters as FiltersType } from '@/types/products';
import { useState } from 'react';

interface Props {
  onFilterChange: (filters: FiltersType) => void;
  initialFilters?: FiltersType;
}

const CATEGORIES = [
  'Bed Sheets',
  'Bathroom Counter Storage',
  'Toilet Roll Holders',
  'Bathroom Shelving',
  'Bath Towels',
  'Bathroom Scales',
  'Pillows & Bolsters',
  'Bedding Accessories',
  'Toilet Brushes',
  'Toilet Covers',
  'Comforters, Quilts & Duvets',
  'Linen Towers & Cabinets',
  'Pillow Protectors',
  'Pillow Cases',
  'Towel Rails & Warmers',
  'Bath Mats',
  'Bathroom Throws',
  'Shower Curtains',
  'Electric Blankets',
  'Shower Caddies & Hangers',
  'Bedding & Bath Linen Sets'
];
const BRANDS = ['Homtex', 'Mitu Bedding Store', 'Clothika', 'Fibro Vision', 'Proclean', 'Sports House', 'Reuva International', 'Buear', 'NO BRAND MART', 'International Homeware', 'Smilcrafts', 'Feska', 'LG 360', 'Keton Trading', 'HOMTEX'];
const SIZES = ['INT', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const PROMOTIONS = ['Mall', 'Flash Sale', 'Free Delivery', 'Buy More Save More', 'Best Price Guaranteed', 'Coins'];
const SHIPPED_FROM = ['Dhaka', 'Chittagong', 'Khulna', 'Sylhet', 'Rajshahi', 'Rangpur', 'Overseas'];
const COLORS = ['Multicolor', 'Black', 'Pink', 'Silver', 'Green', 'Red', 'Gold', 'Orange', 'Off White', 'Maroon', 'Beige', 'Light Blue', 'Light Ash', 'Light Green', 'Blush Pink'];
const WARRANTIES = ['No Warranty', 'Seller Warranty', 'Brand Warranty', 'International Seller Warranty'];

const defaultFilters: FiltersType = {
  categories: [],
  brands: [],
  sizes: [],
  promotions: [],
  shippedFrom: [],
  minPrice: 0,
  maxPrice: 1000,
  rating: 0,
  colors: [],
  warranty: [],
  deliveryOption: null
};

export default function Filters({ onFilterChange, initialFilters = defaultFilters }: Props) {
  const [filters, setFilters] = useState<FiltersType>(initialFilters);
  const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({ 
    categories: false, 
    brands: false, 
    colors: false 
  });

  const handleChange = (key: keyof FiltersType, value: string | number | boolean | null) => {
    const newFilters: FiltersType = { ...filters };
    
    if (key === 'categories' || key === 'brands' || key === 'sizes' || key === 'promotions' || key === 'shippedFrom' || key === 'colors' || key === 'warranty') {
      const arr = newFilters[key] as string[];
      if (arr.includes(value as string)) {
        newFilters[key] = arr.filter(v => v !== value);
      } else {
        newFilters[key] = [...arr, value as string];
      }
    } else if (key === 'deliveryOption') {
      newFilters[key] = newFilters[key] === value ? null : (value as boolean);
    } else {
      newFilters[key] = value as number;
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = value === '' ? 0 : parseInt(value);
    if (!isNaN(numValue) && numValue >= 0) {
      handleChange(type === 'min' ? 'minPrice' : 'maxPrice', numValue);
    }
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const toggleShowMore = (key: string) => setShowMore(prev => ({ ...prev, [key]: !prev[key] }));

  const renderCheckboxes = (label: string, options: string[], key: 'categories' | 'brands' | 'sizes' | 'promotions' | 'shippedFrom' | 'colors' | 'warranty', limit = 10) => (
    <div className="mb-6">
      <h3 className="font-semibold text-gray-700 mb-3">{label}</h3>
      <div className="space-y-2">
        {options.slice(0, showMore[key] ? undefined : limit).map(opt => (
          <label key={opt} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
            <input
              type="checkbox"
              checked={filters[key].includes(opt)}
              onChange={() => handleChange(key, opt)}
              className="mr-2 cursor-pointer"
            />
            <span className="text-sm">{opt}</span>
          </label>
        ))}
        {options.length > limit && (
          <button
            onClick={() => toggleShowMore(key)}
            className="text-orange-500 text-sm underline hover:text-orange-600"
          >
            {showMore[key] ? 'View Less' : 'View More'}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Category */}
      {renderCheckboxes('Category', CATEGORIES, 'categories')}

      {/* Brand */}
      {renderCheckboxes('Brand', BRANDS, 'brands')}

      {/* Size */}
      {renderCheckboxes('Size', SIZES, 'sizes')}

      {/* Service & Promotion */}
      {renderCheckboxes('Service & Promotion', PROMOTIONS, 'promotions')}

      {/* Shipped From */}
      {renderCheckboxes('Shipped From', SHIPPED_FROM, 'shippedFrom')}

      {/* Price Input Boxes */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Price</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice === 0 ? '' : filters.minPrice}
            onChange={(e) => handlePriceChange('min', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            min="0"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice === 1000 ? '' : filters.maxPrice}
            onChange={(e) => handlePriceChange('max', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            min="0"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Rating</h3>
        <select
          value={filters.rating}
          onChange={e => handleChange('rating', +e.target.value)}
          className="w-full p-2 border rounded cursor-pointer"
        >
          <option value={0}>Any</option>
          {[1, 2, 3, 4, 5].map(r => (
            <option key={r} value={r}>⭐{r} & Up</option>
          ))}
        </select>
      </div>

      {/* Color Family */}
      {renderCheckboxes('Color Family', COLORS, 'colors', 8)}

      {/* Warranty Type */}
      {renderCheckboxes('Warranty Type', WARRANTIES, 'warranty')}

      {/* Delivery Option */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Delivery Option Standard</h3>
        <label className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
          <input
            type="checkbox"
            checked={filters.deliveryOption === true}
            onChange={() => handleChange('deliveryOption', true)}
            className="mr-2 cursor-pointer"
          />
          <span className="text-sm">Yes</span>
        </label>
        <label className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
          <input
            type="checkbox"
            checked={filters.deliveryOption === false}
            onChange={() => handleChange('deliveryOption', false)}
            className="mr-2 cursor-pointer"
          />
          <span className="text-sm">No</span>
        </label>
      </div>

      <button 
        onClick={handleClearFilters}
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors font-medium"
      >
        Clear All Filters
      </button>
    </div>
  );
}