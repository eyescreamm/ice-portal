import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
