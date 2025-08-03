import axios from "axios";
import type { Product } from "../models/Product";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export const apiService = {
  // Fetch all products (for initial load)
  async fetchAllProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>("/products");
    return response.data;
  },
  
  // Fetch single product by ID
  async fetchProductById(id: number): Promise<Product> {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  },
};

// Export individual functions for easier imports
export const { fetchAllProducts, fetchProductById } = apiService;
