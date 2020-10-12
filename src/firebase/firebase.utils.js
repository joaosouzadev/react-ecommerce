import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;