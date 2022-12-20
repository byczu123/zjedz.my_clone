import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import photo1 from "../assets/interior_restaurant1.jpg"
import photo2 from "../assets/interior_restuarant2.jpeg"
import './HomePage.css'
import { Context } from "../context/appContext";
import { Link } from "react-router-dom";
import './RestaurantsPage.css'

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
         </div>
         <div className="grid_help">
         {
            restaurants ? restaurants.map((restaurant, index) => {
                return <div className='restaurant_container' key={index}>
                    <h1 className='restaurant_name'>{restaurant.name}</h1>
                    <p className='restaurant_description'>{restaurant.description}</p>
                    <Link className='restaurant_link' to={`/restaurant/${restaurant.restaurant_id}`} 
                    state={{
                        name: restaurant.name,
                        menuId: restaurant.menu_id}}>Strona restauracji
                    </Link>
                </div>
        }) 
        : null
        }
         </div>
         <div className="home-footer">

         </div>
      </div>
   )
}

export default HomePage;