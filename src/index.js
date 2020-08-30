import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App'
import { ProductProvider } from './context';



const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyDeVOyDj4uT4UlULA5bEksMkLzVtro2PAQ",
  authDomain: "dabbai.firebaseapp.com",
  databaseURL: "https://dabbai.firebaseio.com",
  projectId: "dabbai",
  storageBucket: "dabbai.appspot.com",
  messagingSenderId: "490094324343",
  appId: "1:490094324343:web:14f39151e7b517f01ab472",
  measurementId: "G-Q2VDH0W4KX"
});

const routing = (
  
  <ProductProvider>
  <Router>

  <App />
    
     
    
  </Router>
   
  
  </ProductProvider>
  
);

ReactDOM.render(

  routing,
  document.getElementById('root')
);


