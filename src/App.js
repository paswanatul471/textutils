// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

import TextForm from './TextForm';
// import { useState, useTransition } from 'react';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      showAlert(null);
    }, 3000);
  }
  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
      if(mode === 'light')
      {
        setMode ('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
      }
      else{
        setMode ('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
      }
  }

  return (
    
    <>
      <Router>
        <Navbar title="TextUtils" aboutUs ="About" mode={mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading = "Try TextUtils - Word counter, Character counter " mode={mode} />} />

          {/* this method can't use because it's removed from version v6 of react dom router and we should change the from switch keyword  to routes and we can't also import link keyword in app.js file  */}
            {/* <Route path='/'>
              <TextForm showAlert={showAlert} heading = "Enter the text to Analyze below" mode={mode}/>
            </Route> */}
          </Routes>
          
        </div>
      </Router>

    </>

  );
}

export default App;
