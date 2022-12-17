import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReservationsPage = () => {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        
        fetch('/restaurants/get')
        .then(res => {
            if (res.status === 200) return res.json()
        })
        .then(data => {
            console.log(data)
            setRestaurants(data)
            console.log('Ustawiono restauracje')
        })
    }, []);
    
  
    return (
    <div>
        {restaurants.map((restaurant, index) => {
            return <div key={index}>
                <h1 >{restaurant.restaurant_id} {restaurant.name}</h1>
                <Link 
                to={`/restaurant/${restaurant.restaurant_id}`} 
                state={{
                    name: restaurant.name,
                    menuId: restaurant.menu_id}}>Strona restauracji
                </Link>
                </div>
        })}
    </div>
  )
}

export default ReservationsPage