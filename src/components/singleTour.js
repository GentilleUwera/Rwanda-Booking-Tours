import React from "react";
import"./singleTour.css";

const SingleTour=({tour})=>{
    return(
        
            <div className="singleTour-container">
               
            <h1>{tour.title}</h1>
            <img src={tour.images[0]}/> <br/>
            <p>{tour.description}</p>
            {/* <span style={{ display:"flex", justifyContent:"space-between",marginTop:"15px" , fontWeight:"700", marginLeft:"5px" }}> */}
               <div> 
                   <label>DateScheduled</label><br/>
                 {tour.dateScheduled}</div> &nbsp; 
                 <div>
                <label>Date due</label> <br/>
                {tour.dueDate}<br/></div> 
                <div>
                <br/>
                <label>Available Seats</label> <br/>
                {tour.available}</div>
                  <br/>
                 <div>
                <label>Phone-Number</label><br/>
                {tour.phone}</div>
                <a href="./final"> <button>Book Now</button> </a>
                {/* <div onClick={ () => handleClickDrawerVisible ()}> */}
                    {/* <a href="#"> <button className="morebutton"  >Read More... </button> </a> */}
                </div>
                // </span>
            // </div>
       
    )
}
export default SingleTour;