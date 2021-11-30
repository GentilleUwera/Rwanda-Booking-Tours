import React,{useState} from "react";
import Image from "../assets/img/tours.jpeg";
import Tours from "../views/tours";
import {Drawer} from "antd";
import "antd/dist/antd.css";
import SingleTour from "./singleTour";

const TourCard = ({data}) => {

    const [drawerVisible,setDrawerVisible]=useState(false);

    const handleClickDrawerVisible = ()=>{
        setDrawerVisible(true);
    }
        const closeDrawerVisible= ()=>{
            setDrawerVisible(false);
        }
    
    return (
    <>
              
        <Drawer title="Basic Drawer" placement="left" visible={drawerVisible} width={720} onClose={ ()=> closeDrawerVisible()} >
            <SingleTour tour= {data} />

        </Drawer>
                
        <div className="tourcard-container">
                <img src={data.images[0]} width="50%"  />
         
            <div className="tourcard-words">
                <h2>{data.title}</h2>
                <br/>
                <p>{data.description}</p> <br/>
               <span style={{ display:"flex", justifyContent:"space-between",marginTop:"15px" , fontWeight:"700", marginLeft:"5px" }}>
               <div> <label>DateScheduled</label><br/>
                 {data.dateScheduled}</div> &nbsp; 
                 <div>
                <label>Date due</label> <br/>
                {data.dueDate}<br/></div> 
                <div>
                <label>Available Seats</label> <br/>
                {data.available}</div>
                
                <br/><br/><br/>
                 <div>
                <label>Phone-Number</label><br/>
                {data.phone}</div>
                <div onClick={ () => handleClickDrawerVisible()}>
                    <a href="#"> <button className="morebutton"  >Read More... </button> </a>
                </div>
                </span>

            </div>
        </div>
             </>
    )
}
export default TourCard;


