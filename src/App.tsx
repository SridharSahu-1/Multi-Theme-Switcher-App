import React, { useEffect } from "react";
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from "./components/AuthProvider";
import { useAppSelector } from "./store/helpers";
import { router } from './router';

export const App: React.FC = () => {
  const { styles } = useAppSelector((state) => state.theme);

  useEffect(() => {
    document.body.className = styles.bodyClass;
  }, [styles.bodyClass]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
