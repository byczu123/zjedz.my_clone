import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const MenuPage = () => {

    const location = useLocation()
    
    const menuId = location.state && location.state.menuId
    const [name, setName] = useState([])
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        console.log(menuId)
    
        fetch(`/menu/get/${menuId}`)
        .then(res => {
          if (res.status === 200) return res.json()
        })
        .then(data => {
            data.map(menu => {
                setName(menu.name)
            })
        })

        fetch(`/menu/dishes/${menuId}`)
        .then(res => {
            if (res.status === 200) return res.json()
          })
          .then(data => {
            console.log(data)
            setDishes(data)
          })
      }, [])
    
    return (
        <div>
            <h1>Id menu: {menuId} nazwa: {name}</h1>
            <h1>Dishes</h1>
            {dishes.map((dish, index) => {
                return <h2 key={index}>{dish.name} {dish.price} {dish.description}</h2>
            })}
        </div>
    ) 
}

export default MenuPage