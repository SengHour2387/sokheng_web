import apiClient from '@/lib/api-client';
import { Product } from '@/types';

export const ProductService = {
    async getAll(): Promise<Product[]> {
        const response = await apiClient.get('/products?page=1&limit=5');
        console.log(response.data["data"]);
        return response.data["data"];
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
