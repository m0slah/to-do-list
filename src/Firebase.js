import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// eslint-disable-next-line no-undef
const firebaseConfig = {
  apiKey: "AIzaSyAipGNBJtqJ83sy4Ppd7VtCan1nrqS4g10",
  authDomain: "todo-crud-c5e12.firebaseapp.com",
  projectId: "todo-crud-c5e12",
  storageBucket: "todo-crud-c5e12.appspot.com",
  messagingSenderId: "317021610232",
  appId: "1:317021610232:web:828dfcfdd1dda769f3db0d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };