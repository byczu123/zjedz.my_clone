import { React, useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../context/appContext'
import fourTable from '../assets/table-4.png'

const MenuPage = () => {

    const location = useLocation()
    const {store, actions} = useContext(Context)
    const menuId = location.state && location.state.menuId
    const [name, setName] = useState([])
    const [dishes, setDishes] = useState([])

    console.log('MenuPage rendered. Store: ', store.email, store.username)

    useEffect(() => {
        fetch(`/menu/get/${menuId}`)
        .then(res => {
          if (res.status === 200) return res.json()
        })
        .then(data => {
            data.map(menu => {
                console.log('Name of menu set')
                setName(menu.name)
            })
        })

        fetch(`/menu/dishes/${menuId}`)
        .then(res => {
            if (res.status === 200) return res.json()
        })
        .then(data => {
            console.log('Menu:', data)
            setDishes(data)
            })
      }, [])
    
    return (
        <div>
            <h1>Id menu: {menuId} nazwa: {name}</h1>
            <h1>Dishes</h1>
            {dishes ? dishes.map((dish, index) => {
                return <h2 key={index}>{dish.name} {dish.price} {dish.description}</h2>
            }) : null}
        </div>
    ) 
}

export default MenuPage