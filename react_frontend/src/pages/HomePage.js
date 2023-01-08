import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import '../styles/HomePage.css'
import { Context } from "../context/appContext";
import HomeForm from "../components/HomeForm";
import RestaurantPanel from "../components/RestaurantPanel";

function HomePage(){

   const {store, actions} = useContext(Context)
   
   console.log('HomePage rendered. Store: ', store.currentLocation, store.currentDate, store.currentHour, store.currentPeople)

   // useEffect(() => {
   //      fetch('/restaurant/get', options)
   //      .then(res => {
   //          if (res.status === 200) return res.json()
   //      })
   //      .then(data => {
   //          setRestaurants(data)
   //          console.log('Restaurants: ', data)
   //      })
   //  }, []);

   // useEffect(() => {
   //    actions.setCurrentLocation(null)
   //    console.log('Zmiana wartości lokacji na ', store.currentLocation)
   // }, [store.location, store.hour])
   // console.log('HomePage rendered. Store: ', store.email, store.username, locationValue)

   useEffect(() => {
      console.log('HomePage rendered due to store change')
   }, [store.currentLocation, store.currentDate, store.currentHour, store.currentPeople])

   return(
      <div className="home-container">
         <div className="home-header">
            <Navbar />
            <HomeForm />
         </div>
         <p className="rest_paragraph">Polecane restauracje</p>
         <div className="home-restaurants-section">
            <RestaurantPanel/>
         </div>
         <div className="home-footer">

         </div>
      </div>
   )
}

export default HomePage;