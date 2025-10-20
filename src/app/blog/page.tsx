// app/blog/page.tsx
'use client';

import { useState } from 'react';
import { BlogCard } from '@/components/BlogCard';
import Breadcrumb from '@/components/Breadcrumb';
import { sampleBlogs, blogCategories, getFeaturedBlogs } from '@/lib/blogData';
import { Search } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter blogs based on category and search
  const filteredBlogs = sampleBlogs.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlogs = getFeaturedBlogs();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb items={[{ label: 'Blog' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-orange-600 py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Daraz Blog
          </h1>
          <p className="text-lg text-white opacity-95 max-w-2xl mx-auto">
            Discover shopping tips, product reviews, lifestyle guides, and the latest trends
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Posts Section */}
        {featuredBlogs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredBlogs.map(blog => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
          </section>
        )}

        {/* Search & Filter Section */}
        <div className="bg-white rounded-[2px] shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="All">All Categories</option>
                {blogCategories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {blogCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Posts Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Posts' : selectedCategory}
            </h2>
            <p className="text-gray-600">
              {filteredBlogs.length} {filteredBlogs.length === 1 ? 'post' : 'posts'}
            </p>
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map(blog => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts found matching your criteria.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}