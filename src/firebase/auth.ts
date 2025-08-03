import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { auth } from "./config";

export const signUp = async (
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const signIn = async (
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const logOut = async (): Promise<void> => {
  await signOut(auth);
};

// Initialize Firebase Auth persistence
export const initializeAuthPersistence = async (): Promise<void> => {
  try {
    await setPersistence(auth, browserLocalPersistence);
  } catch (error) {
    console.error("Failed to set auth persistence:", error);
  }
};

// User data interface for localStorage
interface StoredUserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
  lastLoginTime: string;
}

// Save user data to localStorage
export const saveUserToLocalStorage = (user: User): void => {
  try {
    const userData: StoredUserData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      lastLoginTime: new Date().toISOString(),
    };
    localStorage.setItem("auth_user", JSON.stringify(userData));

    // Also save to cookies as backup
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30); // 30 days
    document.cookie = `auth_user_id=${
      user.uid
    }; expires=${expirationDate.toUTCString()}; path=/; secure`;
  } catch (error) {
    console.error("Failed to save user to localStorage:", error);
  }
};

// Get user data from localStorage
export const getUserFromLocalStorage = (): StoredUserData | null => {
  try {
    const userData = localStorage.getItem("auth_user");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Failed to get user from localStorage:", error);
    return null;
  }
};

// Clear user data from localStorage and cookies
export const clearUserFromStorage = (): void => {
  try {
    localStorage.removeItem("auth_user");
    // Clear cookie
    document.cookie =
      "auth_user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  } catch (error) {
    console.error("Failed to clear user from storage:", error);
  }
};

// Check if user session is still valid (within 30 days)
export const isUserSessionValid = (userData: StoredUserData): boolean => {
  try {
    const lastLogin = new Date(userData.lastLoginTime);
    const now = new Date();
    const daysDiff = (now.getTime() - lastLogin.getTime()) / (1000 * 3600 * 24);
    return daysDiff < 30; // Session valid for 30 days
  } catch (error) {
    console.error("Failed to validate user session:", error);
    return false;
  }
};

// Enhanced sign in with localStorage backup
export const signInWithPersistence = async (
  email: string,
  password: string
): Promise<User> => {
  await initializeAuthPersistence();
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  saveUserToLocalStorage(userCredential.user);
  return userCredential.user;
};

// Enhanced sign up with localStorage backup
export const signUpWithPersistence = async (
  email: string,
  password: string
): Promise<User> => {
  await initializeAuthPersistence();
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  saveUserToLocalStorage(userCredential.user);
  return userCredential.user;
};

// Enhanced logout with storage cleanup
export const logOutAndClearStorage = async (): Promise<void> => {
  await signOut(auth);
  clearUserFromStorage();
};

// Set up auth state listener
export const setupAuthStateListener = (
  callback: (user: User | null) => void
): (() => void) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      saveUserToLocalStorage(user);
    } else {
      clearUserFromStorage();
    }
    callback(user);
  });
};

export const getAuthErrorMessage = (error: { code: string }): string => {
  switch (error.code) {
    case "auth/user-not-found":
      return "No user found with this email address.";
    case "auth/wrong-password":
      return "Incorrect password.";
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    case "auth/invalid-email":
      return "Invalid email address.";
    case "auth/too-many-requests":
      return "Too many failed attempts. Please try again later.";
    case "auth/network-request-failed":
      return "Network error. Please check your connection.";
    case "auth/user-disabled":
      return "This account has been disabled.";
    default:
      return "An error occurred. Please try again.";
  }
};
