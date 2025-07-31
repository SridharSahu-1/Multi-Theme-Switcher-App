import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { themes, type Theme, type ThemeStyles } from "../theme/themes";

interface ThemeContextProps {
  activeTheme: Theme;
  styles: ThemeStyles;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTheme, setActiveTheme] = useState<Theme>(
    () => (localStorage.getItem("app-theme") as Theme) || "minimal"
  );

  useEffect(() => {
    document.body.className = themes[activeTheme].bodyClass;
    localStorage.setItem("app-theme", activeTheme);
  }, [activeTheme]);

  const contextValue = useMemo(
    () => ({
      activeTheme,
      styles: themes[activeTheme],
      setTheme: setActiveTheme,
    }),
    [activeTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider");
  return ctx;
};
