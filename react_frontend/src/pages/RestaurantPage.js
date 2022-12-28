import { React, useState, useEffect, useContext } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Context } from '../context/appContext'
import './RestaurantPage.css'
import Navbar from '../components/Navbar'
import RestaurantsPage from '../pages/RestaurantsPage'


const RestaurantPage = () => {

  const {store, actions} = useContext(Context)
  
  const params = useParams()
  const location = useLocation()
  
  const name = location.state && location.state.name
  const restaurantId = params && params.restaurant_id
  const menuId = location.state && location.state.menuId
  const restaurantLocation = location.state && location.state.location
  const description = location.state && location.state.description

  const [menu, setMenu] = useState(null)

  console.log('RestaurantsPage rendered. Store: ', store.email, store.username)
  
  useEffect(() => {
      fetch('/menu/dishes/1')
      .then(res => {
          if (res.status === 200) return res.json()
      })
      .then(data => {
          const dataString = JSON.stringify(data)
          setMenu(dataString)
          console.log('Menu: ', data)
      })
  }, []);

  return (
    <div>
      
      <div className='top-container'>
        <Navbar/>
        <div className='info-container'>
          <h1 className='restaurant-name'>{name}</h1>
          <p className='desc'>U nas zjesz zajebiście</p>
          <p className='location'>{restaurantLocation}</p>
          <ul className='list'>
            <li><a >Menu</a></li>
            <li><a >O restauracji</a></li>
          </ul>
        </div>
      </div>

      <div className='about-container'>
        <p className='title'>O restauracji {name}</p>
        <p className='description'>{description}</p>
      </div> 

      <div className='reservation-container'>
        <p className='title'>{name}</p>
        <p>Rezerwacja stolika</p>
        <p>najbliższe godziny dziś:</p>
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
        <button className='restaurant_link'>Zarezerwuj</button>
      </div>
      <div className='menu-container'>
       <RestaurantsPage/>
      </div>
    </div>
  )
}

export default RestaurantPage