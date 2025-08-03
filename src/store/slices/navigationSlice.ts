import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Page = 'home' | 'about' | 'contact' | 'signin' | 'signup';

interface NavigationState {
  current: Page;
}

const initialState: NavigationState = {
  current: 'home',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    goTo: (state, action: PayloadAction<Page>) => {
      state.current = action.payload;
    },
  },
});

export const { goTo } = navigationSlice.actions;
export default navigationSlice.reducer;
