import { React, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/appContext';
import '../styles/RestaurantPanel.css'
import restaurantLogo from '../assets/cojes.jpg'
import ReservationModal from './ReservationModal';

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
            {
                restaurants && restaurants.map((restaurant, index) => {
                        return <div className='restaurant-container' key={index}>
                            <div className='restaurant-image-container'>
                                <Link to={`/restaurant/${restaurant.restaurant_id}`}
                                    state={{
                                        name: restaurant.name,
                                        menuId: restaurant.menu_id,
                                        location: restaurant.location,
                                        description: restaurant.description
                                    }}>
                                    <img src={restaurant.link}></img>
                                </Link>
                                <div className='restaurant-image-description'>
                                    <p>{restaurant.location}</p>
                                </div>
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
                                <ReservationModal restaurantName={restaurant.name} />
                            </div>

                        </div>
                    
                })
            }
        </div>

    )
}

export default RestaurantPanel