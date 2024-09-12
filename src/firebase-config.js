import { initializeApp } from "firebase/app";

import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSUdXS_CCijYIAQo5MPYSgPMOY40FY3U4",
    authDomain: "allah-89eec.firebaseapp.com",
    projectId: "allah-89eec",
    storageBucket: "allah-89eec.appspot.com",
    messagingSenderId: "359670618473",
    appId: "1:359670618473:web:e4f269828fde54540385f8",
    measurementId: "G-3SEG70ZHNX",
  };


  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);