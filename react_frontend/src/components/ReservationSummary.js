import React, { useContext, useState } from 'react'
import '../styles/ReservationSummary.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faClock, faCalendar, faHouse, faUsers, faUser } from "@fortawesome/free-solid-svg-icons";
import { Context } from '../context/appContext';
import Modal from 'react-bootstrap/Modal';

const ReservationSummary = (props) => {

    const {store, actions} = useContext(Context)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const hour = props.hour
    const date = props.date
    const peopleValue = props.peopleValue
    const restaurantName = props.restaurantName
    const restaurantId = props.restaurantId

    const submitReservation = () => {

        const options = {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            hour: hour,
            date: date,
            price: 500,
            peopleValue: peopleValue,
            restaurantId: restaurantId,
            userId: 1
          })
        }

        fetch('/reservation/submit', options)
          .then(res => {
            if (res.status === 200) return res.json()
          })
          .then(data => {
            console.log(data)
            setShowConfirmation(true)
          })

    }

    return (
        <>
        {
        store.username && store.email ?
          <div className="reservation-summary">
              {/* <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
                  <h3 style={{fontWeight: 300}}>SZCZEGÓŁY REZERWACJI</h3>
              </div> */}
            
              <div className='reservation-summary-params'>
              <div className='summary-param'>
                    <FontAwesomeIcon className='param-icon' icon={faHouse}/><b><p className='param-value'>{props.restaurantName}</p></b>
                </div>
              <div className='summary-param'>
                    <FontAwesomeIcon className='param-icon' icon={faClock}/><p className='param-value'>{props.hour}</p>
              </div>
              <div className='summary-param'>
                    <FontAwesomeIcon className='param-icon' icon={faCalendar}/><p className='param-value'>{props.date}</p>
              </div>
              <div className='summary-param'>
                    <FontAwesomeIcon className='param-icon' icon={faUser}/><p className='param-value'>{props.peopleValue}</p>
              </div>
                  {/* {props.hour} {props.date} {props.peopleValue} {props.restaurantName} {restaurantId} */}
              </div>
              <div className='reservation-confirm'>
                  <button id='confirm-reservation' onClick={submitReservation}>POTWIERDŹ</button>
              </div>
          </div>
            :
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <h3 style={{marginTop: '10%', marginBottom: '10%'}}>Zaloguj się, aby dokonać rezerwacji</h3>
          </div>
        }
        </>
        
    )
}

export default ReservationSummary