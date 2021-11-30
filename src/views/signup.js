import React from "react";
import "./signup.css";
import Homelayout from "../components/homeLayout";

const SignUp=()=>{
    return(
   
    <Homelayout>
      <div className="signup-container">
          <h1> Create Your Account</h1>
          <br/><br/><br/>
          <label for="input">Full Names:  </label>
          <input type="text" />
          <br/><br/>
          <label for="input"> your E-mail:  </label>
          <input type="email" />
          <br/><br/>
          <label for="input">Mobile Nbrs:  </label>
          <input type="tel" />
          <br/><br/>
          <label for="input">Date Of Birth:  </label>
          <input type="date" />
          <br/><br/>
          <label for="input">Home Adress:  </label>
          <input type="text" />
          <br/> <br/>
          <label for="input">Set Password:  </label>
          <input type="password" />
          <br/> <br/><br/>
          <a href="./signin"> <button>Submit</button> </a>


      </div>
   </Homelayout>
    
       )
     
}
export default SignUp;