import React, { useEffect,useContext } from 'react';
import './App.css';
import Signup from './Pages/Signup'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Login from './Pages/Login'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext } from './Store/Context';

function App() {
  const {User,setU} = useContext(AuthContext)
  useEffect(() => {
    return (
      console.log(User)
    )
  })
  return (
    <div>
      <Router>
        <Route exact path='/'>
         <Home/>
       </Route>
       <Route path='/signup'>
         <Signup />
       </Route>
       <Route path='/login'>
         <Login/>
       </Route>
      </Router>
    </div>
  );
}

export default App;
