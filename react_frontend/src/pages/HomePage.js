import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import '../styles/HomePage.css'
import { Context } from "../context/appContext";
import HomeForm from "../components/HomeForm";
import RestaurantPanel from "../components/RestaurantPanel";

function HomePage(){

   const [locationValue, setLocationValue] = useState(null)
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

   useEffect(() => {
      actions.setCurrentLocation(null)
      console.log('Zmiana wartości lokacji na ', store.currentLocation)
   }, [store.location])
   console.log('HomePage rendered. Store: ', store.email, store.username, locationValue)

   return(
      <div className="home-container">
         <div className="home-header">
            <Navbar />
            <HomeForm />
         </div>
         <p className="rest_paragraph">Polecane restauracje</p>
         <div className="home-restaurants-section">
            <RestaurantPanel />
         </div>
         <div className="home-footer">

         </div>
      </div>
   )
}

export default HomePage;