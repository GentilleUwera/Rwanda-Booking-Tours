import React from "react";
import Home from "../views/home";
import AboutUs from "../views/aboutus";
import Contacts from "../views/contacts";
import {Routes, Route} from "react-router-dom";
const Index=()=>{
  return (  <Routes>
        <Route element={<Home/>} path="/home"> </Route>
        <Route element={<AboutUs/>} path="/aboutus"> </Route>
        <Route element={<Contacts/>} path="/contacts"> </Route>
    </Routes>)
};
export default Index;
