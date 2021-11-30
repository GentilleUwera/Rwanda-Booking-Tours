import React from "react";
import "./signin.css";
import Homelayout from "../components/homeLayout";

const SignIn=()=>{ 
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
        <a href="./tours"> <button>Log In</button> </a>

        </div>
    </Homelayout>
    )
    
  
    
       
     
}
export default SignIn;