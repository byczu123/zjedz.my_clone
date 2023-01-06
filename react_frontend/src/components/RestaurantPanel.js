import { React, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/appContext';
import '../styles/RestaurantPanel.css'
import restaurantLogo from '../assets/cojes.jpg'
import ReservationModal from './ReservationModal';
import RestaurantCard from './RestaurantCard';

const RestaurantPanel = (props) => {

    const { store, actions } = useContext(Context)
    const [restaurants, setRestaurants] = useState(null)

    const currentLocation = props.currentLocation
    const currentHour = props.currentHour
    const currentDate = props.currentDate
    const currentPeople = props.currentPeople

    console.log('RestaurantsPanel rendered. Params: ', currentLocation, currentHour, currentDate, currentPeople)

    useEffect(() => {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                currentDate: currentDate,
                currentHour: currentHour,
                currentPeople: currentPeople,
                currentLocation: currentLocation
            })
        }
        fetch('/restaurant/get', options)
            .then(res => {
                if (res.status === 200) return res.json()
            })
            .then(data => {
                setRestaurants(data)
                console.log('Restaurants: ', data)
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