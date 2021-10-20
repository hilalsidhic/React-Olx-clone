import React, { useEffect,useContext } from 'react';
import './App.css';
import Signup from './Pages/Signup'
import { BrowserRouter as Router,Route,useHistory } from 'react-router-dom'
import Login from './Pages/Login'
import Create from './Pages/Create'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './Store/Context';


function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user)
        var uid = user.uid; 
        console.log(uid)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  })
  return (
    <div>
      <Router>
        <Route exact path='/'>
         <Home />
       </Route>
       <Route path='/signup'>
         <Signup />
       </Route>
       <Route path='/login'>
         <Login />
       </Route>
       <Route path='/create'>
         <Create />
       </Route>
      </Router>
    </div>
  );
}

export default App;
