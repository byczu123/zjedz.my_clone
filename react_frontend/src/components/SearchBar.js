import React, { useEffect, useState } from 'react'
import '../styles/SearchBar.css'
import { Link, useNavigate } from 'react-router-dom'

const SearchBar = () => {
   
    const [inputValue, setInputValue] = useState('')
    const [restaurants, setRestaurants] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/restaurant/all-restaurants')
            .then(res => {
                if (res.status === 200) return res.json()
            })
            .then(data => {
                setRestaurants(data)
            })
    }, [])

    const filteredRestaurants = restaurants.filter((restaurant) => {
        if (inputValue.length >= 2) return restaurant.name.toLowerCase().includes(inputValue.toLowerCase());
        return
    });

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const searchExactName = () => {
        const filteredRestaurant = restaurants.filter((restaurant) => {
            return restaurant.name.toLowerCase() === (inputValue.toLowerCase());
        });
        if (filteredRestaurant && filteredRestaurant.length > 0) {
            const id = filteredRestaurant[0].restaurant_id
            navigate(`/restaurant/${id}`)
        }
    }

    console.log('SearchBar rendered. Restaurants', restaurants, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', inputValue, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

    return (
        <div className='search-bar-container'>
            <div className="search-bar-description">
                <h3>lub wyszukaj</h3>
                <input placeholder='restauracje...' value={inputValue} onChange={handleInputChange}></input>
            </div>
            <div className="searchbar-dropdown">
            {filteredRestaurants.map((restaurant) => (
                <Link key={restaurant.restaurant_id}  style={{textDecoration: 'none', color: 'black'}}
                to={`/restaurant/${restaurant.restaurant_id}`}
                    state={{
                        name: restaurant.name,
                        menuId: restaurant.menu_id,
                        location: restaurant.location,
                        description: restaurant.description
                    }}>
                    <div className='searchbar-dropdown-item'>
                        <img style={{height: '40px', width: '40px', borderRadius: '30px'}} src={restaurant.link}></img>
                        <span style={{marginLeft: '10px'}}>{restaurant.name}</span>
                    </div>
                </Link>
            ))}
            </div>
            <div className='searchbar-button-container'>
                <button onClick={searchExactName}>Szukaj</button>
            </div>
        </div>
    )
}

export default SearchBar