import { React, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/appContext';

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
        {restaurants ? restaurants.map((restaurant, index) => {
            return <div key={index}>
                <h1 >{restaurant.restaurant_id} {restaurant.name}</h1>
                <Link 
                to={`/restaurant/${restaurant.restaurant_id}`} 
                state={{
                    name: restaurant.name,
                    menuId: restaurant.menu_id}}>Strona restauracji
                </Link>
                </div>
        }) : null}
    </div>
  )
}

export default RestaurantsPage