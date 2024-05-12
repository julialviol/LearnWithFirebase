// get firebase modules via Javascript SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// apiKey: Public API key to interact with Firebase services
// authDomain: URL used for user authentication services
// projectId: Project ID for your Firebase application
// storageBucket: URL for file storage within your application
// messagingSenderId: Sender ID for sending messages via Firebase Cloud Messaging
// appId: Application ID for the Firebase app, it is unique to this application

// STEP 1: Declare Firebase Environment Variables  
const firebaseConfig = {
    apiKey: "AIzaSyD2JPPMz3lLsR4hACndnlkAo4pXHORVPeQ",
    authDomain: "learnwithfirebaseworksho-a9f61.firebaseapp.com",
    projectId: "learnwithfirebaseworksho-a9f61",
    storageBucket: "learnwithfirebaseworksho-a9f61.appspot.com",
    messagingSenderId: "380536001968",
    appId: "1:380536001968:web:0e3b3598c5670b5c4af275",
    measurementId: "G-0VGF6295F1"
  };

// initialze firebase in our project by passing in our environment variables to the `initializeApp` method
const app = initializeApp(firebaseConfig);

// initialze firebase authentication by passing in firebase `app` instance we delared on the line above
export const auth = getAuth(app);

// initialze firestore by passing in firebase `app` instance we delared
export const db = getFirestore(app);
