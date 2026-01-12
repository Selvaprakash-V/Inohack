import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Firebase config (Web app config from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCZ7uSTOO0uj3yKAxB5jIvXr-5pl25k1qo",
  authDomain: "onevoice-auth.firebaseapp.com",
  projectId: "onevoice-auth",
  storageBucket: "onevoice-auth.firebasestorage.app",
  messagingSenderId: "199969728038",
  appId: "1:199969728038:web:ff97e2b64d1b0667cb68e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);