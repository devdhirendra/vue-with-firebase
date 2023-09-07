import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAFFad9blo4z0MR1Po2BQyG0XmyxNGUpjw",
  authDomain: "vue-eat-handson.firebaseapp.com",
  projectId: "vue-eat-handson",
  storageBucket: "vue-eat-handson.appspot.com",
  messagingSenderId: "159839749256",
  appId: "1:159839749256:web:464b806a8c1dd52ba38b3d"
};

export const firebaseApp = initializeApp(firebaseConfig);