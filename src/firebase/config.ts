// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v9-compat and above, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMN7lhR9NXlCHWioQnaYYbqyjDJqzsoP8",
  authDomain: "multi-theme-1d6ce.firebaseapp.com",
  projectId: "multi-theme-1d6ce",
  storageBucket: "multi-theme-1d6ce.firebasestorage.app",
  messagingSenderId: "300241403313",
  appId: "1:300241403313:web:70f19f60e13e55261c5190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
