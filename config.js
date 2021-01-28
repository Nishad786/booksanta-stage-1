import firebase from 'firebase';
 require('@firebase/firestore')
  var firebaseConfig = { 
    apiKey: "AIzaSyDAnnccNNUoz8LMKq4CQ9Sew5qxdZPJv-U",
  authDomain: "book-santa-de919.firebaseapp.com",
  projectId: "book-santa-de919",
  storageBucket: "book-santa-de919.appspot.com",
  messagingSenderId: "674518396802",
  appId: "1:674518396802:web:f9d0d6faa3141fdf31699b",
  measurementId: "G-RC5PD95Y42"
        };
         // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
           export default firebase.firestore();
