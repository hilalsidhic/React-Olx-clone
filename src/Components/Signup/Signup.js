import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/FirebaseContext';
import './Signup.css';

export default function Signup() {
  const history=useHistory()
  const [Username, setUsername] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [Password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="imagesignup "></img>
        <form onSubmit={(e)=>{
          e.preventDefault();
          firebase.auth().createUserWithEmailAndPassword(Email,Password).then((userCredential) => {
              // Signed in
              var user = userCredential.user;
              console.log(user);
              user.updateProfile({
                displayName:Username
              }).then(()=>{
                firebase.firestore().collection('users').add({
                  Id:user.uid,
                  Name:Username,
                  Phone:Phone
                }).then(()=>{
                  history.push('/login')
                })
              })
              // ...
            }).catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              // ..
            });
        }}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={Username}
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={Phone}
            onChange={(e)=>{
              setPhone(e.target.value)
            }}
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
