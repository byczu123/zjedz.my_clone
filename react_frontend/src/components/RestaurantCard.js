import React from 'react'
import '../styles/RestaurantPanel.css'
import { Link } from 'react-router-dom'
import ReservationModal from './ReservationModal'

const RestaurantCard = (props) => {
    
    const restaurantName = props.restaurantName
    const menuId = props.menuId
    const restaurantLocation = props.restaurantLocation
    const restaurantDescription = props.restaurantDescription
    const restaurantLink = props.restaurantLink
    const restaurantId = props.restaurantId

    console.log('RestaurantCard for ', restaurantName, ' rendered')
    
    return (
        <div className='restaurant-container'>
            <div className='restaurant-image-container'>
                <Link to={`/restaurant/${restaurantId}`}
                    state={{
                        name: restaurantName,
                        menuId: menuId,
                        location: restaurantLocation,
                        description: restaurantDescription
                    }}>
                    <img src={restaurantLink}></img>
                </Link>
                <div className='restaurant-image-description'>
                    <p>{restaurantLocation}</p>
                </div>
            </div>
            <div className='restaurant-description'>
                <h2 className='restaurant_name'>{restaurantName}</h2>
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
            <div className='restaurant-link-container'>
                <ReservationModal restaurantName={restaurantName} />
            </div>
        </div>
    )
}

export default RestaurantCard