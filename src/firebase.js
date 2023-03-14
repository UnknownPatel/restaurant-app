import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCBQXaIAmAqLIG5UgKV14DkAxg-y7WucBY",
  authDomain: "restaurant-ac04a.firebaseapp.com",
  projectId: "restaurant-ac04a",
  storageBucket: "restaurant-ac04a.appspot.com",
  messagingSenderId: "704361481122",
  appId: "1:704361481122:web:9064e9cd5cf68d63ce28fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  
// export default app = initializeApp(firebaseConfig);
 