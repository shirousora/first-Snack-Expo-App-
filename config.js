import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCO_KB5JCarBfqSN6FekcvRSZOQo354lLk",
  authDomain: "proyweeklyreact.firebaseapp.com",
  databaseURL: "https://proyweeklyreact-default-rtdb.firebaseio.com",
  projectId: "proyweeklyreact",
  storageBucket: "proyweeklyreact.appspot.com",
  messagingSenderId: "800543917209",
  appId: "1:800543917209:web:30bb5c90ba41b74d89e408",
  measurementId: "G-RYT1V1V12D"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()