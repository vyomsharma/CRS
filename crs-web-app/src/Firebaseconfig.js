import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

// Initialize Firebase
/*const config = {
    apiKey: "AIzaSyAgGS7HCJENK9kkuPHDKPNlSfj2OoHHde4",
    authDomain: "campus-recruitment-system-cr.firebaseapp.com",
    databaseURL: "https://campus-recruitment-system-cr.firebaseio.com",
    projectId: "campus-recruitment-system-cr",
    storageBucket: "campus-recruitment-system-cr.appspot.com",
    messagingSenderId: "864262446127"
};*/

const config = {
    apiKey: "AIzaSyAdMTKBXxEt4RlB-n7ltgzh2kS-bZgs_H8",
    authDomain: "its-crs.firebaseapp.com",
    projectId: "its-crs",
    storageBucket: "its-crs.appspot.com",
    messagingSenderId: "908728961180",
    appId: "1:908728961180:web:153c62505ca6b99c6c8559"
};

const firebaseconfig = firebase.initializeApp(config);

export default firebaseconfig;