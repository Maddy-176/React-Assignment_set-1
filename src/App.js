import logo from './logo.svg';
import './App.css';
import Button from "./components/Button"
import CounterApp from './components/CounterApp';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Modal from './components/Modal';

function App() {



  return (
    <div className="App">
      <h1>Assignments</h1>
      
           <CounterApp/>
      
    </div>
  );
}

export default App;
