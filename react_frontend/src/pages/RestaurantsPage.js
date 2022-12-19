import { React, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
import './RestaurantsPage.css'
import Navbar from "../components/Navbar";

const RestaurantsPage = () => {

    const {store, actions} = useContext(Context)
    const [restaurants, setRestaurants] = useState(null)

    console.log('RestaurantsPage rendered. Store: ', store.email, store.username)
    
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

    return (
    <div>
    <Navbar/>   
    <div className='grid_help'>
        {restaurants ? restaurants.map((restaurant, index) => {

            return <div className='restaurant_container' key={index}>
                 <h1 className='restaurant_name'>{restaurant.name}</h1>
                 <p className='restaurant_description'>{restaurant.description}</p>
                <Link className='restaurant_link' to={`/restaurant/${restaurant.restaurant_id}`} 
                state={{
                    name: restaurant.name,
                    menuId: restaurant.menu_id}}>Strona restauracji
                </Link>
                </div>
        }) : null}
    </div>
    </div>
  )
}

export default RestaurantsPage