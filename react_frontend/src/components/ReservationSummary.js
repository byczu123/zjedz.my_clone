import React, { useContext, useState } from 'react'
import '../styles/ReservationSummary.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faClock, faCalendar, faHouse, faUsers, faUser, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Context } from '../context/appContext';
import Alert from 'react-bootstrap/Alert';

const ReservationSummary = (props) => {

    const {store, actions} = useContext(Context)
    const [showAlert, setShowAlert] = useState(false)
    const [reservationError, setReservationError] = useState(null)
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
            userId: store.id
          })
        }

        fetch('/reservation/submit', options)
          .then(res => {
            if (res.status === 200) return res.json()
          })
          .then(data => {
            console.log(data)
            if (data.error === false) setReservationError(false)
            else setReservationError(true)
          })

    }

    return (
        <>
        {
        store.username && store.email ?
          <>
          {reservationError === null ? 
          <div className="reservation-summary">
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
          <>
          {reservationError ?
          <div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <FontAwesomeIcon className='param-icon' icon={faXmark}
            style={{color: 'red', height: '80px', marginTop: '5%'}}/>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <h3>Ups, coś poszło nie tak</h3>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{marginBottom: '10%', textAlign: 'center'}}>Ta rezerwacja prawdopodobnie nie jest już dostępna. Prosimy o odświeżenie strony i ponowną próbę dokonania rezerwacji</p>
          </div>
        </div>
          :
          <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <FontAwesomeIcon className='param-icon' icon={faCheck}
              style={{color: 'green', height: '80px', marginTop: '5%'}}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <h3>Dziękujemy za dokonanie rezerwacji</h3>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <p style={{marginBottom: '10%', textAlign: 'center'}}>Szczegóły rezerwacji możesz przejrzeć w każdej chwili w panelu uzytkownika</p>
            </div>
            
          </div>
          }
          </>
          }
          </>
          :
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <h3 style={{marginTop: '10%', marginBottom: '10%'}}>Zaloguj się, aby dokonać rezerwacji</h3>
          </div>
        }
        </>
        
    )
}

export default ReservationSummary