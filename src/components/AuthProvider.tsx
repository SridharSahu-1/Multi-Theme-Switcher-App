import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/helpers";
import { setCurrentUser } from "../store/slices/authSlice";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return <>{children}</>;
};
