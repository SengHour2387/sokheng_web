import apiClient from '@/lib/api-client';
import { Product } from '@/types';

export const ProductService = {
    async getAll(): Promise<Product[]> {
        const response = await apiClient.get<Product[]>('/post/findAllProducts');
        console.log(response.data);
        return response.data;
    },

    async getById(id: number | string): Promise<Product> {
        const response = await apiClient.get<Product>(`/post/findProductById/${id}`);
        return response.data;
    },

    async getByCategory(category: string): Promise<Product[]> {
        const response = await apiClient.get<Product[]>(`/post/findProductByCategory/${category}`);
        return response.data;
    }
};
