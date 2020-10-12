import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDwiYMYtRfr_OStbjziA8X-agIgJJUUC4w",
    authDomain: "react-ecommerce-d2272.firebaseapp.com",
    databaseURL: "https://react-ecommerce-d2272.firebaseio.com",
    projectId: "react-ecommerce-d2272",
    storageBucket: "react-ecommerce-d2272.appspot.com",
    messagingSenderId: "1059390622101",
    appId: "1:1059390622101:web:b27bd736ba831a522e8e9c",
    measurementId: "G-HN25K0K9MB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;