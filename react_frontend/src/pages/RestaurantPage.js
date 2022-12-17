import { React, useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const RestaurantPage = () => {
  
  const params = useParams()
  const location = useLocation()
  
  const name = location.state && location.state.name
  const restaurantId = params && params.restaurant_id
  
  const [menu, setMenu] = useState([]);
  
  useEffect(() => {
    console.log(restaurantId)
    console.log(name)
  }, [])

  return (
    <div>
      <h1>Id restauracji: {restaurantId}, nazwa: {name}</h1>
    </div>
  )
}

export default RestaurantPage