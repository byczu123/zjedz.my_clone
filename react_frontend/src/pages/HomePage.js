import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import photo1 from "../assets/interior_restaurant1.jpg"
import photo2 from "../assets/interior_restuarant2.jpeg"
import './HomePage.css'
import { useNavigate } from "react-router-dom";
import { Context } from "../context/appContext";
import Cookies from "js-cookie";
import { decodeToken } from "react-jwt";

function HomePage(){

   const {store, actions} = useContext(Context)

   console.log('HomePage rendered. Store: ', store.email, store.username)

   return(
      <div>
         <Navbar />
         <div className="content">
               <img className="gallery-photo" src={photo1}></img>               
               <img className="gallery-photo" src={photo2}></img>
         </div>
      </div>
   )
}

export default HomePage;