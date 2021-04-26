import firebase from "firebase";
import "@firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyArdkMYgTUwCXX70lB11KWAttnxDQ8zquQ",
    authDomain: "lista-super-app.firebaseapp.com",
    projectId: "lista-super-app",
    storageBucket: "lista-super-app.appspot.com",
    messagingSenderId: "435567422333",
    appId: "1:435567422333:web:015bbebddc89e553e63a14"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();
