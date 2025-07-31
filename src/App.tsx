import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { NavigationProvider } from "./contexts/NavigationContext";
import { Layout } from "./components/Layout/Layout";
import { PageRenderer } from "./components/common/PageRenderer";

export const App: React.FC = () => (
  <ThemeProvider>
    <NavigationProvider>
      <Layout>
        <PageRenderer />
      </Layout>
    </NavigationProvider>
  </ThemeProvider>
);

export default App;
