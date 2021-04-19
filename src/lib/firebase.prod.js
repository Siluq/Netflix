import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// we need to seed the datebase

// we need a config here
const config = {
  apiKey: "AIzaSyCbicPdsXMS106iGsp1WvtMvFKZxGc6QK4",
  authDomain: "netflix-f894a.firebaseapp.com",
  projectId: "netflix-f894a",
  storageBucket: "netflix-f894a.appspot.com",
  messagingSenderId: "218857088766",
  appId: "1:218857088766:web:8061906e2a8b78392127af",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
