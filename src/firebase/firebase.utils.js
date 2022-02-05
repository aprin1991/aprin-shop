// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBbB9x1gNZig5QYQ15ykKLSv39URKd-gDE",
    authDomain: "crwn-db-29e24.firebaseapp.com",
    projectId: "crwn-db-29e24",
    storageBucket: "crwn-db-29e24.appspot.com",
    messagingSenderId: "929795184078",
    appId: "1:929795184078:web:28b8c55690b1414e68879f",
    measurementId: "G-4NBN32Q632"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth?.uid}`)
    try {

        const snapShot = await userRef.get();
        if (!snapShot?.exists) {
            const { displayName, email, photoURL } = userAuth;
            const createdAt = new Date();
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    avatar: photoURL,
                    ...additionalData
                })
            } catch (err) {
                console.log("error creating user", err.message);
            }
        }

    } catch (err) {
        console.log(err.message);
    }
    return userRef

}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit()

}
export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc?.id,
            title,
            items
        }
    });
    // return transformedCollections.reduce((acc, collection) => {
    //     acc[collection.title.toLowerCase()] = collection;
    //     return acc;
    // }, {})

    return transformedCollections
}
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;