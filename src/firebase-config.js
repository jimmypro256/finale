import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDD4yCvIxjXgbn3MlrQrEQZNkY21ErD4hA",
  authDomain: "guild-e664e.firebaseapp.com",
  projectId: "guild-e664e",
  storageBucket: "guild-e664e.appspot.com",
  messagingSenderId: "727850922512",
  appId: "1:727850922512:web:b41e54681face889879095",
  measurementId: "G-826ZZZRV7S"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const storage = getStorage(app);

export default app;








// /*import { initializeApp } from "firebase/app";
// import {getFirestore} from '@firebase/firestore'
// const firebaseConfig = {
//     apiKey: "AIzaSyCLyS5gHZ6whn6BJ1R9vEtxida4aATsTSA",
//     authDomain: "scheme-work.firebaseapp.com",
//     projectId: "scheme-work",
//     storageBucket: "scheme-work.appspot.com",
//     messagingSenderId: "990169536101",
//     appId: "1:990169536101:web:8c9b5a5118c23bc709988c",
//     measurementId: "G-D0FK5FVN3C"
//   };
//   // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app*/
