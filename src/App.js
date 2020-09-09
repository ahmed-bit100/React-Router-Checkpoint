import React, { useState, useEffect } from 'react';
import { Link, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Category from './Category';
import Products from './Products'

import {Login,fakeAuth} from './Login';
import Admin from './Admin';


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

function App() {
  const [isauth,setisauth]=useState(true)
  useEffect(()=>{setisauth(false)},[])
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

          
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/login">Admin area</Link></li>

          </ul>
        </nav>
          <switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Category" component={Category}/>
          <Route path="/products" component={Products}/>
          <Route path="/Login" component={Login}/>
          {/* <Route path="/Admin"component={Admin}/> */}
         
          </switch>
          </BrowserRouter>
        
          
    </div>
  );
}

export default App;
