import { React, useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const RestaurantPage = () => {
  
  const params = useParams()
  const location = useLocation()
  
  const name = location.state && location.state.name
  const restaurantId = params && params.restaurant_id
  const menuId = location.state && location.state.menuId
  
  return (
    <div>
      <h1>Id restauracji: {restaurantId}, nazwa: {name}, Id menu: {menuId}</h1>
      <Link 
      to={`/restaurant/${restaurantId}/menu`} 
      state={{
        menuId: menuId}}>
          Menu
      </Link>
    </div>
  )
}

export default RestaurantPage