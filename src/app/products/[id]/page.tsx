// app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { sampleProducts } from '@/lib/products';
import { Product } from '@/types/products';

async function getProduct(id: string): Promise<Product | undefined> {
  // In production, replace with: await fetch(`/api/products/${id}`)
  // For now, using sample data
  const productId = parseInt(id);
  return sampleProducts.find(p => p.id === productId);
}

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Await params before accessing properties
  const { id } = await params;
  const product = await getProduct(id);
  
  if (!product) {
    notFound();
  }
  
  return <ProductDetail product={product} />;
}

// Optional: Generate static params for better performance
export async function generateStaticParams() {
  return sampleProducts.map((product) => ({
    id: product.id.toString(),
  }));
}