// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmkZeYHQw7u1phbN2MJ3SgpHBFU0LO6lg",
  authDomain: "ss-shipment-system.firebaseapp.com",
  projectId: "ss-shipment-system",
  storageBucket: "ss-shipment-system.appspot.com",
  messagingSenderId: "710818592997",
  appId: "1:710818592997:web:95511754ad4f0450b8fc0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todoCol);

onAuthStateChanged(auth, user => {
    if(user!=null){
        console.log("logged in!!");
    }else{
        console.log('no user');
    }
});