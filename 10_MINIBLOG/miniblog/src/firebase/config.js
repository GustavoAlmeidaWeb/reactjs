import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDvkW48lReTSLqV64fpfWwcpFIhnllgzMA",
  authDomain: "miniblog-cfd89.firebaseapp.com",
  projectId: "miniblog-cfd89",
  storageBucket: "miniblog-cfd89.appspot.com",
  messagingSenderId: "537225801993",
  appId: "1:537225801993:web:458562dc2aedd3b3fe63d8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };