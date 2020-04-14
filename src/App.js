import React from 'react';
import SnakeToCamelForm from './SnakeToCamelForm';
import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div className="App">
      <SnakeToCamelForm/>
      <ToastContainer autoClose={2500}/>
    </div>
  );
}

export default App;
