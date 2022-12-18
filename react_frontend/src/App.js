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
import { useJwt } from "react-jwt"
import injectContext from './context/appContext';

function App() {
  
  const {store, actions} = useContext(Context)
  const token = Cookies.get('token')
  const {decodedToken, isExpired} = useJwt(token)
  
  useEffect(() => {
    if (decodedToken) {
      actions.setUserData(decodedToken.username, decodedToken.email)
      console.log('Store set')
    }
    console.log(store.username, store.email)
  }, [decodedToken])

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