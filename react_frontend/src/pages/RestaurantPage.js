import { React, useState, useEffect, useContext } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Context } from '../context/appContext'
import '../styles/RestaurantPage.css'
import Navbar from '../components/Navbar'


const RestaurantPage = () => {

  const { store, actions } = useContext(Context)

  const params = useParams()
  const location = useLocation()
  const restaurantId = params && params.restaurant_id
  const menuId = location.state && location.state.menuId

  const [restaurant, setRestaurant] = useState(null)
  const [dishes, setDishes] = useState(null)

  console.log('RestaurantPage rendered. Store: ', store.email, store.username, store.user_id)

  useEffect(() => {
    fetch(`/restaurant/get/${restaurantId}`)
      .then(res => {
        if (res.status === 200) return res.json()
      })
      .then(data => {
        setRestaurant(data)
        console.log('Restaurant:', data)

      })
  }, []);

  useEffect(() => {
    fetch(`/menu/dishes/${menuId}`)
      .then(res => {
        if (res.status === 200) return res.json()
      })
      .then(data => {
        setDishes(data)
        console.log('Menu: ', data)
      })
  }, []);


  return (
    <>{restaurant != null &&
      <>
        <div>
          <div className='top-container'>
            <Navbar />
            <div className='info-container'>
              <h1 className='restaurant-name'>{restaurant[0].name}</h1>
              <p className='desc'>U nas zjesz zajebiście</p>
              <p className='location'>{restaurant[0].location}</p>
              <ul className='list'>
                <li><a >Menu</a></li>
                <li><a >O restauracji</a></li>
              </ul>
            </div>
          </div>
          <div className='about-container'>
            <p className='title'>O restauracji </p>
            <p className='description'>{restaurant[0].description}</p>
          </div>
          <div className='reservation-container'>
            <p className='title'>{restaurant[0].name}</p>
            <p>Rezerwacja stolika</p>
            <p>najbliższe godziny dziś:</p>
            <div className='restaurant-hours-container'>
              <div className='restaurant-hours'>
                <button className='restaurant-hour-button'>
                  14:30
                </button>
                <button className='restaurant-hour-button'>
                  15:00
                </button>
                <button className='restaurant-hour-button'>
                  15:30
                </button>
                <button className='restaurant-hour-button'>
                  16:00
                </button>
              </div>
            </div>
            <button className='reservation-button'>Zarezerwuj</button>
          </div>

          <div className='about-container'>
            <h1>Menu</h1>
            {dishes ? dishes.map((dish, index) => {
              return <div className='dish-container' key={index}>
                <h5 className='dish-name'>{dish.name}</h5> <p className='price'>{dish.price}zł/szt.</p></div>
            }) : null}
          </div>
        </div>
      </>
    }
    </>
  )
}

export default RestaurantPage