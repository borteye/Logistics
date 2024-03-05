import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCz589rgc62zlpJPCpTHiTvmo3o_oNhmS4",
  authDomain: "chat-app-e9176.firebaseapp.com",
  projectId: "chat-app-e9176",
  storageBucket: "chat-app-e9176.appspot.com",
  messagingSenderId: "684037511212",
  appId: "1:684037511212:web:2af9cda4784d62b6aa9989",
});

const db = firebaseConfig.firestore();
const auth = getAuth(firebaseConfig);
const storage = getStorage(firebaseConfig);

export default db;
export { auth, storage };
