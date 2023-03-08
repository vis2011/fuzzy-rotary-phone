import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBtDajvsVu4EtYo7IZ_qvoNVxTkx5oJKOg",
  authDomain: "student-form-68e26.firebaseapp.com",
  databaseURL: "https://student-form-68e26-default-rtdb.firebaseio.com",
  projectId: "student-form-68e26",
  storageBucket: "student-form-68e26.appspot.com",
  messagingSenderId: "820375036176",
  appId: "1:820375036176:web:a7a5811b0288362dd8c595",
  measurementId: "G-ERSZXHP5RQ"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
 

  