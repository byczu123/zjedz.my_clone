import './App.css';
import {useState, useEffect, useContext} from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import RestaurantsPage from './pages/RestaurantsPage';
import Cookies from 'js-cookie'
import RestaurantPage from './pages/RestaurantPage';
import MenuPage from './pages/MenuPage';
import { Context } from './context/appContext';
import { decodeToken } from "react-jwt"
import injectContext from './context/appContext';

function App() {
  
  const {store, actions} = useContext(Context)
  const token = Cookies.get('token')
  
  console.log('App rendered ', store.email, store.username)

  useEffect(() => {
    async function validateToken() {
      const decodedToken = decodeToken(token)
      if (decodedToken) {
        console.log('Call setUserData in app')
        actions.setUserData(decodedToken.username, decodedToken.email)
      }
    }
    validateToken()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/register' element={<RegisterPage/>}/>
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/restaurants' element={<RestaurantsPage/>}/>
        <Route exact path='/restaurant/:restaurant_id' element={<RestaurantPage/>}/>
        <Route exact path='/restaurant/:restaurant_id/menu' element={<MenuPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);