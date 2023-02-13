import { React, useState, useEffect, useContext } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Context } from '../context/appContext'
import '../styles/RestaurantPage.css'
import Navbar from '../components/Navbar'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import ReservationModal from '../components/ReservationModal'


const RestaurantPage = () => {

  const { store, actions } = useContext(Context)

  const params = useParams()
  const location = useLocation()
  const restaurantId = params && params.restaurant_id
  const restaurantName = location.state && location.state.restaurantName
  const menuId = location.state && location.state.menuId
  const [showModal, setShowModal] = useState(false)

  const [restaurant, setRestaurant] = useState(null)
  const [dishes, setDishes] = useState(null)
  
  const handleModal = (index) => {
    setShowModal(true)
    setActiveModalIndex(index)
  }
  const [activeModalIndex, setActiveModalIndex] = useState(null)
  console.log('RestaurantsPage rendered. Store: ', store.email, store.username, menuId)

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
    fetch(`/menu/dishes/${restaurantId}`)
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
              <p className='desc'>U nas zjesz dobrze!</p>
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
            <div className='helper'>
                <Link className='restaurant_link1' onClick={() => handleModal(0)}>
                    ZAREZERWUJ
                </Link> 
                <ReservationModal 
                restaurantName={restaurant[0].name}
                restaurantId={restaurantId}
                show={showModal} 
                onHide={() => setShowModal(false)} 
                activeIndex={activeModalIndex}
                currentPeople={store.currentPeople}
                currentDate={store.currentDate}/>
            </div>
              <Link to={`facebook.com/${restaurant[0].name}`}><FaFacebookF className='fb'/></Link>
              <Link to={`instagram.com/${restaurant[0].name}`}><FaInstagram className='ig'/></Link>
          </div>

          <div className='about-container'>
            <h1>Menu</h1>
            {dishes ? dishes.map((dish, index) => {
              return <div className='dish-container' key={index}>
                <h5 className='dish-name'>{dish.name}</h5> <p className='price'>{dish.price}zł/szt.</p></div>
            }) : null}
          </div>
          <div className='foto-container'>

          </div>
        </div>
      </>
    }
    </>
  )
}

export default RestaurantPage