import React from "react";
import Home from "../views/home";
import AboutUs from "../views/aboutus";
import Contacts from "../views/contacts";
import Tours from "../views/tours";
import  SingleTour from "../components/singleTour";
import SignIn from "../views/signin";
import SignUp from "../views/signup";
import Final from "../views/final";
import Submit from "../views/submit";
import NewTour from "../views/dashboard/NewTour";
import {Routes, Route} from "react-router-dom";


const Index=()=>{
  return ( 
     <Routes>
        <Route element={<Home/>} path="/home"> </Route>
        <Route element={<AboutUs/>} path="/aboutus"> </Route>
        <Route element={<Contacts/>} path="/contacts"> </Route>
        <Route element={<Tours/>} path="/tours"> </Route>
        <Route element={<SingleTour/>} path="/singleTour"> </Route>
        <Route element={<SignIn/>} path="/signin"> </Route>
        <Route element={<SignUp/>} path="/signup"> </Route>
        <Route element={<Final/>} path="/final"> </Route>
        <Route element={<Submit/>} path="/submit"> </Route>
        <Route element={<NewTour/>} path="/NewTour">  </Route>
        
    </Routes> 
    )
};
export default Index;
