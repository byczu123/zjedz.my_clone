import { React, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/appContext';
import './RestaurantsPage.css'
import restaurantLogo from '../assets/cojes.jpg'

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
     <div className='grid_help'>
        {
        restaurants ? restaurants.map((restaurant, index) => {
            return <div className='restaurant-container' key={index}>
                <div className='restaurant-image-container'>
                    <img src={restaurantLogo}></img>
                </div>
                <div className='restaurant-description'>
                    <h2 className='restaurant_name'>{restaurant.name}</h2>
                    <h3>Rezerwacja stolika</h3>
                    <h4>najbliższe godziny dziś</h4>
                </div>
                <div className='restaurant-hours-container'>
                    <div className='restaurant-hours'>
                        <button className='restaurant-hour-button'>
                            14:30
                        </button>
                        <button className='restaurant-hour-button'>
                            14:30
                        </button>
                        <button className='restaurant-hour-button'>
                            14:30
                        </button> 
                        <button className='restaurant-hour-button'>
                            14:30
                        </button>
                    </div>
                </div>
                
                {/* <p className='restaurant_description'>{restaurant.description}</p> */}
                <div className='restaurant-link-container'>
                   <Link className='restaurant_link' to={`/restaurant/${restaurant.restaurant_id}`} 
                        state={{
                        name: restaurant.name,
                        menuId: restaurant.menu_id}}>Strona restauracji
                    </Link> 
                </div>
                
            </div>
        }) 
        : null
        }
    </div>
    
  )
}

export default RestaurantsPage