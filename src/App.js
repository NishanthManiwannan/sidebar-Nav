import React from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Reports from './Pages/Reports';
import Products from './Pages/Products';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path='/' exact element={<Home/>} />
          <Route path='/reports' element={<Reports/>} />
          <Route path='/products' element={<Products/>} />
        </Routes >
      </Router>
    </>
  );
}

export default App;