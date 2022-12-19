import { React, useState, useEffect, useContext } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Context } from '../context/appContext'

const RestaurantPage = () => {
  
  const {store, actions} = useContext(Context)
  
  const params = useParams()
  const location = useLocation()
  
  const name = location.state && location.state.name
  const restaurantId = params && params.restaurant_id
  const menuId = location.state && location.state.menuId
  
  const [tables, setTables] = useState(null)

  console.log('RestaurantPage rendered. Store: ', store.email, store.username)

  useEffect(() => {
    fetch(`/table/get/${restaurantId}`)
    .then(res => {
      if (res.status === 200) return res.json()
    })
    .then(data => {
      setTables(data)
      console.log('Tables:', data)
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
      {tables ? tables.map((table, index) => {
        return <h2 key={index}>Id {table.table_id} Position {table.table_position} Price {table.price} Number of places {table.number_of_places}</h2>
      }) : null}
    </div>
  )
}

export default RestaurantPage