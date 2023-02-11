import { React, useState, useEffect, useContext } from 'react';
import { Context } from '../context/appContext';
import '../styles/RestaurantPanel.css'
import RestaurantCard from './RestaurantCard';

const RestaurantPanel = (props) => {

    const { store, actions } = useContext(Context)
    const [restaurants, setRestaurants] = useState(null)

    console.log('RestaurantsPanel rendered. Params: ', store.currentLocation, store.currentHour, store.currentDate, store.currentPeople)

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                currentDate: store.currentDate,
                currentHour: store.currentHour,
                currentPeople: store.currentPeople,
                currentLocation: store.currentLocation
            })
        }
        fetch('/restaurant/get', options)
            .then(res => {
                if (res.status === 200) return res.json()
            })
            .then(data => {
                setRestaurants(data)
                console.log('RestaurantPanel pobiera restauracje: ', data)
            })
    }, [store.currentLocation, store.currentDate, store.currentHour, store.currentPeople]);

    return (
        <div className='grid_help'>
            {restaurants && restaurants.map((restaurant, index) => {
                return <RestaurantCard key={index}
                    restaurantName={restaurant.name}
                    menuId={restaurant.menu_id}
                    restaurantLocation={restaurant.location}
                    restaurantDescription={restaurant.description}
                    restaurantLink={restaurant.link}
                    restaurantId={restaurant.restaurant_id}/>
                })
            }
        </div>
    )
}

export default RestaurantPanel