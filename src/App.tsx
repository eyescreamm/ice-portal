import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/HeaderComponents/Header"
import Home from "./components/Home"
import Blog from "./components/Blog"
import Products from "./components/Products"
import Profile from "./components/Profile"
import Footer from "./components/FooterComponents/Footer"


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
