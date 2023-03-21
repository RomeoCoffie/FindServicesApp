import { initializeApp } from "firebase/app";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage' 
// import { useSelector } from 'react-redux'

const firebaseConfig = {
  apiKey: "AIzaSyA0r6lmJ01Q_0Z4xDYfzLZlHfPiLkZRlaA",
  authDomain: "findservices-9502f.firebaseapp.com",
  databaseURL: "https://findservices-9502f-default-rtdb.firebaseio.com",
  projectId: "findservices-9502f",
  storageBucket: "findservices-9502f.appspot.com",
  messagingSenderId: "920837562698",
  appId: "1:920837562698:web:b5d5c092cd06983d3c21b3",
  measurementId: "G-C49SR29MKY"
};


export const App = initializeApp(firebaseConfig);
// const db = getFirestore(App);
export const Analytics = getAnalytics(App);
export const auth= getAuth();
export const storage=getStorage(App);
export default App;

