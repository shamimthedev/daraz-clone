// components/Breadcrumb.tsx
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string; // Optional href - if not provided, it's just text (current page)
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean; // Show home icon/link at the start
}

export default function Breadcrumb({ items, showHome = true }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        {/* Home Link */}
        {showHome && (
          <>
            <li>
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span className="ml-1">Home</span>
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </>
        )}

        {/* Breadcrumb Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-gray-900 font-medium' : 'text-gray-600'}>
                  {item.label}
                </span>
              )}
              
              {!isLast && <ChevronRight className="w-4 h-4 text-gray-400 ml-2" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}