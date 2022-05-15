import firebase from firebase;
const firebaseConfig = {
  apiKey: "AIzaSyBNO_tCdBekDsw_yycdjKL9SygT1qYwGJs",
  authDomain: "whatsapp-46bba.firebaseapp.com",
  projectId: "whatsapp-46bba",
  storageBucket: "whatsapp-46bba.appspot.com",
  messagingSenderId: "575430621259",
  appId: "1:575430621259:web:51a9c85c6c0c41d22ef5ce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
GoogleAuthProvider;

export {auth,provider};
export default db;