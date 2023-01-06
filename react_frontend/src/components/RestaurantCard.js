import React, { useContext, useEffect, useState } from 'react'
import '../styles/RestaurantPanel.css'
import { Link } from 'react-router-dom'
import ReservationModal from './ReservationModal'
import { Context } from '../context/appContext'

const RestaurantCard = (props) => {
    
    const {store, actions} = useContext(Context)
    const [showModal, setShowModal] = useState(false)
    const [activeModalIndex, setActiveModalIndex] = useState(null)
 
    const restaurantName = props.restaurantName
    const menuId = props.menuId
    const restaurantLocation = props.restaurantLocation
    const restaurantDescription = props.restaurantDescription
    const restaurantLink = props.restaurantLink
    const restaurantId = props.restaurantId

    const [firstHours, setFirstHours] = useState(null)

    const handleModal = (index) => {
        setShowModal(true)
        setActiveModalIndex(index)
    }

    const getFirstHours = () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                restaurantId: restaurantId,
                currentDate: store.currentDate,
                currentPeople: store.currentPeople
            })
        }
        fetch('/reservation/first-hours', options)
            .then(res => {
                if (res.status === 200) return res.json()
            })
            .then(data => {
                setFirstHours(data.hours)
                console.log('Ustawiono godziny dla restauracji na ', firstHours)
            })
    }

    useEffect(() => {
        getFirstHours()
    }, [store.currentLocation, store.currentDate, store.currentHour, store.currentPeople])

    console.log('RestaurantCard for ', restaurantName, ' rendered', showModal)
    
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
                <h4>najbliższe godziny {store.currentDate} dla {store.currentPeople} osób</h4>
            </div>
            <div className='restaurant-hours-container'>
                <div className='restaurant-hours'>
                    {firstHours && firstHours.map((firstHour, index)=> {
                        return <button key={index} className='restaurant-hour-button' onClick={() => handleModal(index)}>
                            {firstHour.hour}
                        </button>
                    })}
                </div>
            </div>
            <div className='restaurant-link-container'>
                <Link className='restaurant_link' onClick={() => handleModal(0)}>
                    ZAREZERWUJ
                </Link> 
                <ReservationModal restaurantName={restaurantName} show={showModal} onHide={() => setShowModal(false)} activeIndex={activeModalIndex}/>
            </div>
        </div>
    )
}

export default RestaurantCard