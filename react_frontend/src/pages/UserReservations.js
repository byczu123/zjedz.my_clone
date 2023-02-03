import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Context } from '../context/appContext'
import '../styles/UserReservations.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendar, faHouse, faUsers, faUser, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

const UserReservations = () => {

    const { store, actions } = useContext(Context)
    const [reservations, setReservations] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!store.email && !store.username) navigate('/')
    }, [store.email, store.username])

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: store.id
            })
        }
        fetch('/reservation/user-reservations', options)
            .then(res => {
                if (res.status === 200) return res.json()
            })
            .then(data => {
                setReservations(data.reservations)
            })
    }, [])

    console.log('User reservations rendered. User data', store.username, store.email, store.id, reservations)

    return (
        <div className='user-reservations-container'>
            <div className='user-reservations-header'>
                <Navbar/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
                <h1 style={{fontWeight: 300}}>AKTUALNE REZERWACJE</h1>
            </div>
            <div className='user-reservations-grid'>
            {reservations && reservations.map(reservation => {
                return <div className='user-reservation-container'>
                <div className='user-reservation-image'>
                    <Link to={`/restaurant/${reservation.restaurant_id}`}
                        state={{
                            name: reservation.name,
                            menuId: reservation.menu_id,
                            location: reservation.location,
                            description: reservation.description
                        }}>
                        <img src={reservation.link}></img>
                    </Link>
                    <div className='user-reservation-description'>
                        <p>{reservation.location}</p>
                    </div>
                </div>
                <div className='user-reservation-name'>
                    <h2>{reservation.name}</h2>
                </div>
                <div className='user-reservation-data'>
                    <div className='user-reservation-data-element'>
                        <FontAwesomeIcon className='param-icon' icon={faClock}/>
                        <p>{reservation.hour}</p>
                    </div>
                    <div className='user-reservation-data-element'>
                        <FontAwesomeIcon className='param-icon' icon={faCalendar}/>
                        <p>{reservation.date}</p>
                    </div>
                    <div className='user-reservation-data-element'>
                        <FontAwesomeIcon className='param-icon' icon={faUser}/>
                        <p>{reservation.people}</p>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button id="delete-reservation">ZREZYGNUJ</button>
                </div>
            </div>
            })}
            </div>
        </div>
    )
}

export default UserReservations