import react from "react";
import "./contacts.css";
import Homelayout from "../components/homeLayout";

const Home=()=>{return(
    <Homelayout>
     <div className="contacts-div">
<h1>For More Information</h1>
<br/><br/> <br/>
<label >Full Names:   Rwanda Booking Tours</label>
     <br/> <br/> <br/>
     <label >E-mail :  RBTours@gmail.com</label>
     <br/><br/> <br/>
     <label >Tel No :   +250786332335</label>
     <br/> <br/> <br/> 
     <label for= "input">Leave A Message:</label>
     <br/> <br/>
     <input type="text"/>
     <br/>    
     <button>Submit</button>
     </div>  
    
   </Homelayout>
    
       )
     
}
export default Home;