"use client";

import { useProducts } from '@/hooks/use-products';
import Image from 'next/image';
import ProductCard from '../ui/productCard';

export default function ProductList() {
    const { products, loading, error } = useProducts();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 text-center p-4">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}
