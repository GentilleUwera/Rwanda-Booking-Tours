import React from "react";
import Homelayout from "../components/homeLayout";
import TourCard from "../components/tourcard";
import allToursData from "../assets/constants/tours.json";




const Tours=()=>{



    return(
      
        <Homelayout>
            <div className="tours-container">
                {
                    allToursData.map((data)=>(<TourCard data={data}/>))
                }
                

            </div>
           
        </Homelayout>
       
    )
}
export default Tours;