import React from "react";
import {BrowserRouter as Router, Switch, Route, Link}from "react-router-dom"
const Header=()=>{
  return(
    <>
   
      <header className="header">
        <nav className="navbar nav-1">
          <section className="flex">
          <Link to="/Body" className="inline-btn">Medicare alliance</Link>
            <ul>
              <li><Link to="/Post">post Medicine<i class="fa-solid fa-hand-holding-medical"></i></Link  ></li>
            </ul>
          </section>
        </nav>
        <nav style={{background: 'transparent'}} className="navbar nav-2">
          <section className="flex">
            <div id="menu-btn" className="fas fa-bars" />
            <div className="menu">
              <ul>
                <li><a href="Body">Ask👇</a>
                  <ul>
                    <li> <Link to="/Contact" className="inline-btn">Help</Link></li>
                    <li> <Link to="/Listing" className="inline-btn">Medicine</Link></li>
                  </ul>
                </li>
                <li><a href="Body">donate 👇</a>
                  <ul>
                    <li> <Link to="/Post" className="inline-btn">Post Medicine</Link></li>
                  </ul>
                </li>
                <li><a href="Body">available👇</a>
                  <ul>
                    <li> <Link to="/Listing" className="inline-btn">medicine</Link></li>
                  </ul>
                </li>
                <li><a href="Body">Help </a>
                  <ul>
                 <li> <Link to="/About" className="inline-btn">About</Link></li>
                    <li> <Link to="/Contact" className="inline-btn">Contact us</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <ul>
             
              <li><a href="#">account <i className="fas fa-angle-down" /></a>
                <ul>
                  <li> <Link to="/Login" className="inline-btn">Login </Link></li>
                  <li> <Link to="/Register" className="inline-btn">Register</Link></li>
                </ul>
              </li>
            </ul>
          </section>
        </nav>
      </header>
  
  
    </>
    )
};

export default Header