import React from  'react';
import {NavLink} from 'react-router-dom';
import './index.css';
const Navbar = () => {
    return (
      <div>
      <div className="container-fluid nav_bg">
          <div className="row">
            <div className="container-fluid p-0">
              
            
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
  <div className="container-fluid">
    <a className="navbar-brand" href="https://zainul-aziz.github.io/IULEventMaster/"><h3>EventMaster</h3></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact  activeClassName='menuActive' className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menuActive' className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menuActive' className="nav-link" to="/events">Events</NavLink>
        </li>                
        <li className="nav-item">
          <NavLink activeClassName='menuActive' className="nav-link" to="/sign">SignUp</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menuActive' className="nav-link" to="/signin">SignIn</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink activeClassName='menuActive' className="nav-link" to="/login">LogIn</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink activeClassName='menuActive' className="nav-link" to="/contact">Contact </NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>
          </div>
        </div>
</div>
    );
};
export default Navbar;