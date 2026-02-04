import axios from 'axios';

// Create an Axios instance with default configuration
const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://fakestoreapi.com', // Default to fakestoreapi for demo
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        // Strategy: Opportunistic Authentication
        // If a token exists, attach it. This allows the same client to work for:
        // 1. Guest users (no token sent)
        // 2. Authenticated users (token sent)

        // Check if running on client-side before accessing localStorage
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('accessToken'); // Or use cookies/session handling
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle global errors here (e.g., 401 Unauthorized, 500 Server Error)
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default apiClient;
