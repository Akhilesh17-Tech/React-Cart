import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB23Oz5mPP93es4PYtOkbkGKReQuWSY8xw',
  authDomain: 'cart-b7475.firebaseapp.com',
  projectId: 'cart-b7475',
  storageBucket: 'cart-b7475.appspot.com',
  messagingSenderId: '192526295101',
  appId: '1:192526295101:web:be50baa118f0e8790c8a54',
};
const app = initializeApp(firebaseConfig);
console.log(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
