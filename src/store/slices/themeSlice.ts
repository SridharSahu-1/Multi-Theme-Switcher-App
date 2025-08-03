import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { themes, type Theme, type ThemeStyles } from '../../theme/themes';

interface ThemeState {
  activeTheme: Theme;
  styles: ThemeStyles;
}

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('app-theme') as Theme) || 'minimal';
  }
  return 'minimal';
};

const initialState: ThemeState = {
  activeTheme: getInitialTheme(),
  styles: themes[getInitialTheme()],
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.activeTheme = action.payload;
      state.styles = themes[action.payload];
      
      // Update localStorage and body class
      if (typeof window !== 'undefined') {
        localStorage.setItem('app-theme', action.payload);
        document.body.className = themes[action.payload].bodyClass;
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
