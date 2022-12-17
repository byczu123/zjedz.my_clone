import './App.css';
import {useState, useEffect} from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ReservationsPage from './pages/ReservationsPage';
import Cookies from 'js-cookie'

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
        <Route exact path='/reservations' element={<ReservationsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;