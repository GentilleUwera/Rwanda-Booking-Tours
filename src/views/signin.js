import React from "react";
import "./signin.css";
import Homelayout from "../components/homeLayout";
import { useNavigate } from "react-router";

const SignIn=()=>{ 

    const navigate= useNavigate();
     
    return(

    <Homelayout>
        <div className="signin-container">
            <h1>Sign In </h1>
            <br/> <br/> <br/>
        
         <label for="input">Enter Ur E-mail:   </label>
        <input type="email"/>
        <br/> <br/>
        <label for="input">Enter password:   </label>
        <input type="password"/>
          <br/> <br/> <br/> <br/>
         <button onClick={()=>{

            localStorage.setItem("UserLoggedIn",true);
            // navigate.pushState("/dash/newtour");
            navigate("/dash/NewTour");

        }} 
        >Log In</button> 

        </div>
    </Homelayout>
    )
    
  
    
       
     
}
export default SignIn;