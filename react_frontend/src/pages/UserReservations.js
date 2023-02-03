import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Context } from '../context/appContext'
import '../styles/UserReservations.css'
import { Link } from 'react-router-dom'

const UserReservations = () => {

    const { store, actions } = useContext(Context)
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
                username: store.username,
                email: store.email
            })
        }
        fetch('/reservation/user-reservations', options)
            .then(res => {
                if (res.status === 200) return res.json()
            })
            .then(data => {
                console.log(data)
            })
    }, [])

    console.log('User reservations rendered. User data', store.username, store.email, store.id)

    return (
        <div className='user-reservations-container'>
            <div className='user-reservations-header'>
                <Navbar/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
                <h1 style={{fontWeight: 300}}>AKTUALNE REZERWACJE</h1>
            </div>
            <div className='restaurant-container'>
            <div className='restaurant-image-container'>
                <div className='restaurant-image-description'>
                    {/* <p>{restaurantLocation}</p> */}
                </div>
            </div>
            <div className='restaurant-description'>
                <h2 className='restaurant_name'></h2>
                <h3>Rezerwacja stolika</h3>
                <h4>najbliższe godziny  dla  osób</h4>
            </div>
            <div className='restaurant-hours-container'>
                <div className='restaurant-hours'>
                    
                </div>
            </div>
            <div className='restaurant-link-container'>
                <Link className='restaurant_link'>
                    ZAREZERWUJ
                </Link> 
            </div>
        </div>
        </div>
    )
}

export default UserReservations