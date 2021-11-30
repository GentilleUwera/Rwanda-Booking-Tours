import React from "react";
import "./home.css";
import Homelayout from "../components/homeLayout";

const Home=()=>{return(
    <Homelayout>
      <div className="home-bg">
      <h1>Rwanda Booking Tours</h1>
      <div className="page">
     <h2>Rwanda Booking Tours</h2>
     <p>welcome to Rwanda Booking Tours</p>
     <p> We are pleased to travel with you </p>
     <p>...</p>
     <a href="./tours"> <button><h2>Book Now</h2></button></a>
   </div>
   </div> 
   </Homelayout>
    
       )
     
}
export default Home;