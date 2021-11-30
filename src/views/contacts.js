import React from "react";
import "./contacts.css";
import Homelayout from "../components/homeLayout";

const Home=()=>{return(
    <Homelayout>
     <div className="contacts-div">
<h1>For More Information</h1>
<br/><br/> <br/>
<label >Full Names:   Rwanda Booking Tours</label>
     <br/> <br/> 
     <label >E-mail :  RBTours@gmail.com</label>
     <br/><br/> 
     <label >Tel No :   +250786332335</label>
     <br/> <br/> <br/> 
     <label for= "input">Enter e-mail:</label>
     {/* <br/> <br/> */}
     <input type="email" />
     <br/> <br/>
     <label for= "input">Enter password:</label>
     {/* <br/> <br/> */}
     <input type="password"/>
     <br/> <br/> 
     <div className="submit-div">
     <label for= "input">Leave A Message:</label>
     {/* <br/> <br/> */}
     <input type="text"/>
     <br/>    
     <a href="./submit"> <button>Submit</button> </a>
     </div>
     </div> 
    
      
    
   </Homelayout>
    
       )
     
}
export default Home;