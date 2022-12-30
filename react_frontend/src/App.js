import './App.css';
import {useState, useEffect, useContext} from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Cookies from 'js-cookie'
import RestaurantPage from './pages/RestaurantPage';
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
        actions.setUserData(decodedToken.email, decodedToken.username)
      }
    }
    validateToken()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/restaurant/:restaurant_id' element={<RestaurantPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);