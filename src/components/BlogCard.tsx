// components/BlogCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  featured?: boolean;
}

export function BlogCard({
  title,
  slug,
  excerpt,
  image,
  category,
  author,
  date,
  readTime,
  featured = false
}: BlogCardProps) {
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Link href={`/blog/${slug}`} className="group block h-full">
      <article className="bg-white rounded-[2px] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
        {/* Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
              <Tag className="w-3 h-3" />
              {category}
            </span>
          </div>
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-3 right-3">
              <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                FEATURED
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
            {excerpt}
          </p>

          {/* Meta Info */}
          <div className="space-y-3 mt-auto">
            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">{author.name}</span>
            </div>

            {/* Date & Read Time */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}