import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
   <Router>
     <div className="App">
      <Routes>
        <Route path='/checkout'
         element={
         <div>
         <Header />
         <Checkout />
         </div>
         } />
        <Route path='/login'
         element={<div>
          <Login />
         </div>} />
        <Route path='/'
         element={<div>
          <Header />
          <Home />
         </div>} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
