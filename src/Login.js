import React, { useState } from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import logoImg2 from './imgs/Amazon_logo.svg.png';
import { auth } from './firebase';


function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //THIS STOPS REFRESHING
    // DO THE LOGIN LOGIC

    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      // LOGED IN REDIRECT TO HOME PAGE
      navigate('/');
    })
    .catch((e) => alert(e.message));
  }

  const register = (event) => {
    event.preventDefault(); //THIS STOPS REFRESHING
    // DO THE REGISTER LOGIC

    auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
      //CREATED A USER AND LOGED IN
      navigate('/');
    })
    .catch((e) => alert(e.message));
  }

  return (
    <div className='login'>
      <Link to="/">
        <img className='login__logo' src={logoImg2} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button onClick={login} type='submit' className='login__signInButton'>Sign in</button>
          <p>
            By signing-in you agree to  Amazon's Conditions of Use and Sale.Please see our Privacy Notice, our Cookies Notices and our Interest-Based Ads Notice.
          </p>
          <button onClick={register} className='login__registerButton'>Create your amazon account</button>
        </form>
      </div>
    </div>
  )
}

export default Login;