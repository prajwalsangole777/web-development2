import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAKnsdyO_jr2JM_5L4wO_hyrO1KqFBzjw",
  authDomain: "full-stack-dbef7.firebaseapp.com",
  databaseURL: "https://full-stack-dbef7.firebaseio.com",
  projectId: "full-stack-dbef7",
  storageBucket: "full-stack-dbef7.appspot.com",
  messagingSenderId: "700876037391",
  appId: "1:700876037391:web:e75b6ccb5e81537d19b27a",
  measurementId: "G-D4H3SC4X32",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
