import React, { useEffect } from "react";
import { AuthProvider } from "./components/AuthProvider";
import { Layout } from "./components/Layout/Layout";
import { PageRenderer } from "./components/common/PageRenderer";
import { useAppSelector } from "./store/helpers";

export const App: React.FC = () => {
  const { styles } = useAppSelector((state) => state.theme);

  useEffect(() => {
    document.body.className = styles.bodyClass;
  }, [styles.bodyClass]);

  return (
    <AuthProvider>
      <Layout>
        <PageRenderer />
      </Layout>
    </AuthProvider>
  );
};

export default App;
