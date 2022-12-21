import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import photo1 from "../assets/interior_restaurant1.jpg"
import photo2 from "../assets/interior_restuarant2.jpeg"
import './HomePage.css'
import { Context } from "../context/appContext";
import { Link } from "react-router-dom";
import './RestaurantsPage.css'
import HomeForm from "../components/HomeForm";
import RestaurantsPage from "./RestaurantsPage";

function HomePage(){

   const {store, actions} = useContext(Context)
   const [restaurants, setRestaurants] = useState(null)

   useEffect(() => {
        fetch('/restaurant/get')
        .then(res => {
            if (res.status === 200) return res.json()
        })
        .then(data => {
            setRestaurants(data)
            console.log('Restaurants: ', data)
        })
    }, []);

   console.log('HomePage rendered. Store: ', store.email, store.username)

   return(
      <div className="home-container">
         <div className="home-header">
            <Navbar />
            <HomeForm />
         </div>
         <p className="rest_paragraph">Nasze restauracje</p>
         <div className="home-restaurants-section">
            <RestaurantsPage />
         </div>
         <div className="home-footer">

         </div>
      </div>
   )
}

export default HomePage;