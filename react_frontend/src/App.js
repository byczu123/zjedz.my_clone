import './App.css';
import {useState, useEffect} from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import RestaurantsPage from './pages/RestaurantsPage';
import Cookies from 'js-cookie'
import RestaurantPage from './pages/RestaurantPage';
import MenuPage from './pages/MenuPage';

function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const tokenFromCookie = Cookies.get('token')
    if (tokenFromCookie) {
      sessionStorage.setItem('token', tokenFromCookie)
      setToken(tokenFromCookie)
    }
    console.log('Zsynchronizowano token w sessionStorage z ciasteczkiem', sessionStorage.getItem('token'))
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

export default App;