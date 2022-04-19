import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCd9Y05BXKO-w_EU0csFTh8drHklGDZ7N4',
  authDomain: 'cart-878ae.firebaseapp.com',
  projectId: 'cart-878ae',
  storageBucket: 'cart-878ae.appspot.com',
  messagingSenderId: '431375803832',
  appId: '1:431375803832:web:124e5c19132c17ab291b4d',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
