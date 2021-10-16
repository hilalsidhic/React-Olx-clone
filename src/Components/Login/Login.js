import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/FirebaseContext';
import './Login.css';

function Login() {
  const {firebase} = useContext(FirebaseContext)
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const history = useHistory()
  const handleLogin=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(Email,Password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
    history.push('/')
    // ...
     })
    .catch((error) => {
    var errorCode = error.code;
    console.log(errorCode)
    var errorMessage = error.message;
    console.log(errorMessage)
  });
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onClick={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={Email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={Password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
