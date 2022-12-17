import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const MenuPage = () => {

    const location = useLocation()
    
    const menuId = location.state && location.state.menuId
    const [name, setName] = useState('aaa')

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
      }, [])
    
    return (
        <h1>Id menu: {menuId} nazwa: {name}</h1>
    ) 
}

export default MenuPage