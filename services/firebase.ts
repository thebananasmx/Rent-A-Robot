import { Lead, ServiceResponse } from '../types';

/**
 * FIREBASE CONFIGURATION
 * ----------------------
 * To use real Firebase:
 * 1. Install firebase: npm install firebase
 * 2. Uncomment the import below
 * 3. Fill in the firebaseConfig object with your actual credentials from the Firebase Console
 */

/*
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
*/

/**
 * MOCK SERVICE
 * Simulates adding a document to a collection
 */
export const saveLeadToFirebase = async (lead: Lead): Promise<ServiceResponse> => {
  console.log("Attempting to save lead to Firebase (Mock)...", lead);
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simulate success
  // In a real app: await addDoc(collection(db, "leads"), lead);
  
  const isSuccess = true; // Change to false to test error handling

  if (isSuccess) {
    return {
      success: true,
      message: "¡Gracias! Hemos recibido su solicitud. Nos pondremos en contacto pronto."
    };
  } else {
    return {
      success: false,
      message: "Hubo un error al procesar su solicitud. Por favor intente nuevamente."
    };
  }
};