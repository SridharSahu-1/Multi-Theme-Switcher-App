import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Product } from '../../models/Product';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=8');
  if (!response.ok) throw new Error('Failed to fetch products');
  return (await response.json()) as Product[];
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching products';
      });
  },
});

export default productsSlice.reducer;
