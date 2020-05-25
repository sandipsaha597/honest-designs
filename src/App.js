import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
    </div>
  )
}

export default App;
