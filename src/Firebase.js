import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCzXbezCzBhrLJSdXT7KE345oqLu9HgpOo",
    authDomain: "dos-sonhos-eu-sou-o-amor.firebaseapp.com",
    databaseURL: "https://dos-sonhos-eu-sou-o-amor.firebaseio.com",
    projectId: "dos-sonhos-eu-sou-o-amor",
    storageBucket: "dos-sonhos-eu-sou-o-amor.appspot.com",
    messagingSenderId: "815095684159",
    appId: "1:815095684159:web:567389122a391135e66c8a",
    measurementId: "G-4MSTWLCD92"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
export default firebase;