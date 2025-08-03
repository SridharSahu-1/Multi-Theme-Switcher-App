import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type User } from 'firebase/auth';

interface AuthState {
  currentUser: User | null;
  loading: boolean;
}

const initialState: AuthState = {
  currentUser: null,
  loading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCurrentUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
