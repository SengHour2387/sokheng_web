"use client";

import { useProducts } from '@/hooks/use-products';
import Image from 'next/image';

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
            <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-black-100 rounded-3xl shadow-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-48 w-full " >
                            <Image
                                src={product.images && product.images.length > 0 ? product.images[0].image : '/placeholder.png'}
                                alt={product.name}
                                fill
                                className="object-cover p-2 rounded-3xl"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold truncate" title={product.name}>
                                {product.name}
                            </h3>
                            <p className="text-gray-500 text-sm mt-1 capitalize">{product.mainCategory}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-xl font-bold">${product.price}</span>
                            
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
