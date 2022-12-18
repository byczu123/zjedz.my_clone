import { React, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { decodeToken } from "react-jwt"
import Cookies from 'js-cookie';
import { Context } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const RestaurantsPage = () => {

    const navigate = useNavigate()
    const {store, actions} = useContext(Context)
    const [restaurants, setRestaurants] = useState([])
    
    useEffect(() => {
        const token = Cookies.get('token')
        const decodedToken = decodeToken(token)
        if (decodedToken) {
            actions.setUserData({username: decodedToken.username, email: decodedToken.email})
            console.log(decodedToken)
        } else {
            navigate('/login')
        }
    }, [])
    
    useEffect(() => {
        fetch('/restaurant/get')
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

export default RestaurantsPage