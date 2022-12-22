import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvTq6CGzVPfR-FgnOD4NfLfBsfRU6tLf4",
    authDomain: "testfirebase-74ceb.firebaseapp.com",
    projectId: "testfirebase-74ceb",
    storageBucket: "testfirebase-74ceb.appspot.com",
    messagingSenderId: "801456862577",
    appId: "1:801456862577:web:5de651a0870c8df880b2d0",
    measurementId: "G-L43CT6G5WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app; // add this line 
