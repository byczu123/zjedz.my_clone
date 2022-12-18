import { React, useState, useEffect, useContext } from 'react'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'
import { Context } from '../context/appContext'
import { decodeToken } from 'react-jwt'
import Cookies from 'js-cookie'

const RestaurantPage = () => {
  
  const navigate = useNavigate()
  const {store, actions} = useContext(Context)
  
  useEffect(() => {
    const token = Cookies.get('token')
    const decodedToken = decodeToken(token)
    if (decodedToken) {
      actions.setUserData({username: decodedToken.username, email: decodedToken.email})
      console.log(decodedToken)
    } else {
      navigate('/login')
    }
  }, [])

  const params = useParams()
  const location = useLocation()
  
  const name = location.state && location.state.name
  const restaurantId = params && params.restaurant_id
  const menuId = location.state && location.state.menuId
  
  const [tables, setTables] = useState([])

  useEffect(() => {
    fetch(`/table/get/${restaurantId}`)
    .then(res => {
      if (res.status === 200) return res.json()
    })
    .then(data => {
      setTables(data)
      console.log(data)
    })
  }, [])

  return (
    <div>
      <h1>Id restauracji: {restaurantId}, nazwa: {name}, Id menu: {menuId}</h1>
      <h1>Menu:</h1>
      <Link 
      to={`/restaurant/${restaurantId}/menu`} 
      state={{
        menuId: menuId}}>
          Menu
      </Link>
      <h1>Tables:</h1>
      {tables.map((table, index) => {
        return <h2 key={index}>Id {table.table_id} Position {table.table_position} Price {table.price} Number of places {table.number_of_places}</h2>
        
      })}
    </div>
  )
}

export default RestaurantPage