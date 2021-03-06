import firebase from 'firebase/app';
import 'firebase/auth';
import serviceAccount from '../service-account-file.json';

firebase.initializeApp(serviceAccount);

export const auth = firebase.auth();

export default firebase;
