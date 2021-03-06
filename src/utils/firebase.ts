import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import serviceAccount from '../service-account-file.json';

firebase.initializeApp(serviceAccount);

export const db = firebase.firestore();

export const auth = firebase.auth();

export default firebase;
