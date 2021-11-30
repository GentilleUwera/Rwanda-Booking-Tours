import React from "react";
import "./aboutus.css";
import Homelayout from "../components/homeLayout";

const Home=()=>{
    return(
    <Homelayout>
      <div className="aboutus-div">
          <h1>About Us</h1>
          <p>We provide outdoor recreation activities,car rentals, hotels,travel insurance, package tours, insurance, guide books,arranging logistics for luggage and medical items delivery for travellers upon request, public transport timetables, car rentals, and bureau de change services.</p>
          <p> We also serve as general sales agents for airlines that do not have offices in a specific region.</p>
         
          <h1>Our main Function</h1>
           <p>A travel agency's main function is to act as an agent, selling travel products and services on behalf of a supplier. We do not keep inventory in-hand unless they have pre-booked hotel rooms or cabins on a cruise ship for a group travel event such as a wedding, honeymoon, or other group event.</p>
      </div>
   </Homelayout>
    
       )
     
}
export default Home;