import React from 'react'

const ReservationSummary = (props) => {
  return (
    <div>{props.hour} {props.date} {props.peopleValue}</div>
  )
}

export default ReservationSummary