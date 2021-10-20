import firebase from 'firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBGKGagFHETkGdO_QfI8uF5YyB5-WJCzjo",
    authDomain: "react-olx-clone-6102b.firebaseapp.com",
    projectId: "react-olx-clone-6102b",
    storageBucket: "react-olx-clone-6102b.appspot.com",
    messagingSenderId: "865656415187",
    appId: "1:865656415187:web:3e4d9ff2c786abe2334526",
    measurementId: "G-N04DJF79HV"
  };

  export default firebase.initializeApp(firebaseConfig)