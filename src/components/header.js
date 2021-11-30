import React from "react";
import "./header.css";
import logo from "../assets/img/logoo.jpg";

const Header =()=>{
    return(
        <div className="header-container">
        {/* <h1>header</h1> */}
        <img src={logo} width="5%"/>
        <div className="navbar-right">
        <a href="/home">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/contacts">Contacts</a>
        <a href="/signIn">Sign In</a>
        <a href="/signUp">Sign Up</a> 
        <a href="/tours">Tours</a> 
    
        </div>
        
        </div>
    )
}
export default Header;