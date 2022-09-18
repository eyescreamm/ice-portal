import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
