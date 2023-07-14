
import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Layout from './components/Layout';
import Home from './Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Store from './pages/Store';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';





function App() {

  useEffect(() => {
    // Initialize Firebase
    const firebaseConfig = {
      // Your Firebase configuration
    };

    firebase.initializeApp(firebaseConfig);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Signup/>} />
            <Route path="Store" element={<Store/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
