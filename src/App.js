import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function App() {
  const [{user}, dispatch] = useStateValue();

  // useEffect <<<<<<<<< POWERFUL
  // PIECE OF CODE WHICH RUNS BASED ON A GIVEN CONDITION
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // THE USER IS LOGGED IN

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //THE USER IS LOGGED OUT

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      //ANY CLEANUP OPTION GO IN HERE
      unsubscribe();
    }
  }, [])
  console.log('user is ', user)

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
