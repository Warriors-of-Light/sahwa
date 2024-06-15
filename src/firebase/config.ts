import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4QMYkLh2c0O8g5O1P4VIjV3vnLmgBf2c",
  authDomain: "bezra-301c6.firebaseapp.com",
  projectId: "bezra-301c6",
  storageBucket: "bezra-301c6.appspot.com",
  messagingSenderId: "23574045753",
  appId: "1:23574045753:web:457d1be33ebfa753d019e8",
};

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
