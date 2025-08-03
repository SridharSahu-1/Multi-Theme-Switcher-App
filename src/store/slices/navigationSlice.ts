import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Page = 'home' | 'about' | 'contact' | 'signin' | 'signup' | 'product' | 'cart' | 'payment';

interface NavigationState {
  current: Page;
  selectedProductId: number | null;
}

const initialState: NavigationState = {
  current: 'home',
  selectedProductId: null,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    goTo: (state, action: PayloadAction<Page>) => {
      state.current = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<number>) => {
      state.selectedProductId = action.payload;
    },
  },
});

export const { goTo, setSelectedProduct } = navigationSlice.actions;
export default navigationSlice.reducer;
