import React from 'react'
import '../styles/ReservationSummary.css'

const ReservationSummary = (props) => {

    const hour = props.hour
    const date = props.date
    const peopleValue = props.peopleValue.split(' ')[0]
    const restaurantName = props.restaurantName
    // const restaurantId = 

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
            restaurantId: 1,
            userId: 1
          })
        }

        fetch('/reservation/submit', options)
          .then(res => {
            if (res.status === 200) return res.json()
          })
          .then(data => {
            console.log(data)
          })

    }

    return (
        <div className="reservation-summary">
            <div>{props.hour} {props.date} {props.peopleValue} {props.restaurantName}</div>
            <div className='reservation-confirm'>
                <button id='confirm-reservation' onClick={submitReservation}>POTWIERDŹ</button>
            </div>
        </div>
    )
}

export default ReservationSummary