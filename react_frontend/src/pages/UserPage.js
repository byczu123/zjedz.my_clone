import React, { useEffect } from 'react'
import { Context } from '../context/appContext'
import { useContext, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'



export default function UserPage() {
  const { store, actions } = useContext(Context)
  const location = useLocation()
  const user_id = location.state && location.state.user_id
  const [reservations,setReservations] = useState(null)


  useEffect(()=>{
    fetch(`/reservation/get/${store.user_id}`)
    .then(res => {
      if (res.status === 200) return res.json()
    })
    .then(data => {
      setReservations(data)
      console.log('Reservations:', data)

    })
  },[user_id]);
  
  return (
    <>{reservations != null &&
    <div>UserPage{store.user_id}</div>
    }
    </>
  )
}
