// lib/blogData.ts

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export const blogCategories = [
  'Shopping Tips',
  'Product Reviews',
  'Fashion',
  'Electronics',
  'Lifestyle',
  'Deals & Offers',
  'How-to Guide'
];

export const sampleBlogs: BlogPost[] = [
  {
    id: 1,
    title: '10 Must-Have Fashion Items for This Season',
    slug: '10-must-have-fashion-items-for-this-season',
    excerpt: 'Discover the hottest fashion trends and essential wardrobe pieces that will elevate your style this season.',
    content: `
      <p>Fashion is ever-evolving, and staying on top of the latest trends can be challenging. This season brings exciting new styles that combine comfort with elegance.</p>
      
      <h2>1. Oversized Blazers</h2>
      <p>The oversized blazer continues to dominate the fashion scene. Perfect for both casual and formal occasions, this versatile piece can transform any outfit.</p>
      
      <h2>2. Statement Sneakers</h2>
      <p>Comfort meets style with bold, statement sneakers. From chunky soles to vibrant colors, these shoes are a must-have for the fashion-forward individual.</p>
      
      <h2>3. Midi Dresses</h2>
      <p>Elegant and timeless, midi dresses are perfect for any occasion. Choose from floral prints, solid colors, or modern patterns to match your personal style.</p>
      
      <h2>4. Wide-Leg Trousers</h2>
      <p>Say goodbye to skinny jeans and hello to wide-leg trousers. This comfortable yet chic option pairs perfectly with crop tops or tucked-in blouses.</p>
      
      <h2>5. Leather Accessories</h2>
      <p>Quality leather bags, belts, and shoes add sophistication to any ensemble. Invest in timeless pieces that will last for years.</p>
    `,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
    author: {
      name: 'Sarah Ahmed',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    date: '2025-10-15',
    readTime: '5 min read',
    tags: ['Fashion', 'Trends', 'Style Guide'],
    featured: true
  },
  {
    id: 2,
    title: 'Smart Shopping: How to Get the Best Deals Online',
    slug: 'smart-shopping-how-to-get-best-deals-online',
    excerpt: 'Learn proven strategies to save money and find amazing deals when shopping online. Your wallet will thank you!',
    content: `
      <p>Online shopping offers convenience and variety, but knowing how to navigate deals can save you significant money.</p>
      
      <h2>Compare Prices Across Platforms</h2>
      <p>Never settle for the first price you see. Use price comparison tools and check multiple websites before making a purchase.</p>
      
      <h2>Sign Up for Newsletters</h2>
      <p>Many online stores offer exclusive discounts to newsletter subscribers. Take advantage of these offers to save on your favorite items.</p>
      
      <h2>Use Cashback Apps</h2>
      <p>Cashback apps and browser extensions can help you earn money back on purchases you're already making.</p>
      
      <h2>Shop During Sales Events</h2>
      <p>Major sales events like Black Friday, Cyber Monday, and seasonal clearances offer the deepest discounts.</p>
    `,
    category: 'Shopping Tips',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop',
    author: {
      name: 'Rafiq Hassan',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    date: '2025-10-12',
    readTime: '7 min read',
    tags: ['Shopping', 'Deals', 'Money Saving'],
    featured: true
  },
  {
    id: 3,
    title: 'Top 5 Smartphones Under 30,000 Taka in 2025',
    slug: 'top-5-smartphones-under-30000-taka-2025',
    excerpt: 'Looking for a budget-friendly smartphone? Check out our curated list of the best phones that offer great value for money.',
    content: `
      <p>Finding a quality smartphone on a budget doesn't mean compromising on features. Here are the top picks for 2025.</p>
      
      <h2>1. Samsung Galaxy A34</h2>
      <p>Excellent camera quality, long battery life, and a stunning AMOLED display make this a top choice for budget-conscious buyers.</p>
      
      <h2>2. Xiaomi Redmi Note 13</h2>
      <p>Known for outstanding performance and value, this phone offers flagship features at a fraction of the cost.</p>
      
      <h2>3. Realme 11 Pro</h2>
      <p>Fast charging, impressive design, and reliable performance make this a solid mid-range option.</p>
      
      <h2>4. Vivo Y100</h2>
      <p>Great for photography enthusiasts, this phone delivers excellent camera performance in various lighting conditions.</p>
      
      <h2>5. Oppo A78</h2>
      <p>Sleek design, smooth performance, and good battery life make this an attractive choice for everyday users.</p>
    `,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
    author: {
      name: 'Tanvir Rahman',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    date: '2025-10-10',
    readTime: '6 min read',
    tags: ['Smartphones', 'Electronics', 'Reviews'],
    featured: true
  },
  {
    id: 4,
    title: 'Home Decor Ideas on a Budget',
    slug: 'home-decor-ideas-on-budget',
    excerpt: 'Transform your living space without breaking the bank. Discover creative and affordable home decor ideas.',
    content: `
      <p>Creating a beautiful home doesn't require a fortune. With creativity and smart shopping, you can achieve stunning results.</p>
      
      <h2>DIY Wall Art</h2>
      <p>Create personalized wall art using affordable materials. Frame fabric, create gallery walls with photos, or try your hand at painting.</p>
      
      <h2>Repurpose and Upcycle</h2>
      <p>Give old furniture new life with paint, new hardware, or creative modifications. Thrift stores are treasure troves for budget decor.</p>
      
      <h2>Add Plants</h2>
      <p>Indoor plants are affordable, improve air quality, and add natural beauty to any space. Start with low-maintenance varieties.</p>
      
      <h2>Use Textiles Wisely</h2>
      <p>Cushions, throws, and curtains can dramatically change a room's appearance without major investment.</p>
    `,
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    author: {
      name: 'Nadia Islam',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    date: '2025-10-08',
    readTime: '5 min read',
    tags: ['Home Decor', 'DIY', 'Budget'],
    featured: false
  },
  {
    id: 5,
    title: 'Ultimate Guide to Laptop Buying in 2025',
    slug: 'ultimate-guide-laptop-buying-2025',
    excerpt: 'Confused about which laptop to buy? Our comprehensive guide will help you make an informed decision.',
    content: `
      <p>Choosing the right laptop depends on your needs, budget, and intended use. This guide breaks down everything you need to know.</p>
      
      <h2>Determine Your Primary Use</h2>
      <p>Are you a student, professional, gamer, or creative? Your primary use case will dictate the specifications you need.</p>
      
      <h2>Processor Power</h2>
      <p>Intel Core i5 or AMD Ryzen 5 processors offer excellent performance for most users. Gamers and creators should consider i7/Ryzen 7 or higher.</p>
      
      <h2>RAM Requirements</h2>
      <p>8GB is minimum for basic tasks, 16GB for multitasking and professional work, and 32GB for heavy creative applications.</p>
      
      <h2>Storage Options</h2>
      <p>SSDs are essential for fast performance. Aim for at least 256GB, with 512GB being ideal for most users.</p>
      
      <h2>Display Quality</h2>
      <p>Consider screen size, resolution, and panel type based on your work. IPS panels offer better color accuracy.</p>
    `,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop',
    author: {
      name: 'Kamal Uddin',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    date: '2025-10-05',
    readTime: '8 min read',
    tags: ['Laptops', 'Electronics', 'Buying Guide'],
    featured: false
  },
  {
    id: 6,
    title: '7 Essential Kitchen Gadgets Every Home Cook Needs',
    slug: '7-essential-kitchen-gadgets-every-home-cook-needs',
    excerpt: 'Upgrade your cooking game with these must-have kitchen gadgets that make meal preparation easier and more enjoyable.',
    content: `
      <p>The right kitchen tools can transform your cooking experience. These essential gadgets will make you a more efficient home chef.</p>
      
      <h2>1. Quality Chef's Knife</h2>
      <p>A sharp, well-balanced chef's knife is the foundation of any kitchen. Invest in quality and maintain it properly.</p>
      
      <h2>2. Multi-Function Food Processor</h2>
      <p>Save time on chopping, mixing, and grinding with a reliable food processor. It's a game-changer for meal prep.</p>
      
      <h2>3. Cast Iron Skillet</h2>
      <p>Versatile and durable, a cast iron skillet can go from stovetop to oven and lasts a lifetime with proper care.</p>
      
      <h2>4. Digital Kitchen Scale</h2>
      <p>Precise measurements lead to consistent results, especially in baking. A digital scale is essential for serious cooks.</p>
      
      <h2>5. Instant-Read Thermometer</h2>
      <p>Take the guesswork out of cooking meat and ensure food safety with an accurate instant-read thermometer.</p>
    `,
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
    author: {
      name: 'Ayesha Khan',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop'
    },
    date: '2025-10-03',
    readTime: '6 min read',
    tags: ['Kitchen', 'Cooking', 'Home'],
    featured: false
  }
];

// Helper functions
export function getFeaturedBlogs(): BlogPost[] {
  return sampleBlogs.filter(blog => blog.featured);
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return sampleBlogs.find(blog => blog.slug === slug);
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return sampleBlogs.filter(blog => blog.category === category);
}

export function getRelatedBlogs(currentBlogId: number, category: string, limit: number = 3): BlogPost[] {
  return sampleBlogs
    .filter(blog => blog.id !== currentBlogId && blog.category === category)
    .slice(0, limit);
}