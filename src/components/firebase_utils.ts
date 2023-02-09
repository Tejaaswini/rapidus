// import firebase from 'firebase/app'
import firebase from 'firebase/compat/app';
import 'firebase/storage'

// Firebase configuration
const config = {
    apiKey: "AIzaSyBxgTtUkg_QgtSCx_v3OcCyD-iB92jlbaM",
    authDomain: "rapidus-7b0db.firebaseapp.com",
    projectId: "rapidus-7b0db",
    storageBucket: "rapidus-7b0db.appspot.com",
    messagingSenderId: "861312223844",
    appId: "1:861312223844:web:d4f1ee2a9ee6fa62802d71",
    measurementId: "G-N15REW35ND"
  };

export const app = firebase.initializeApp(config)
export default firebase;
