import './App.css';
import {useState, useEffect} from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
 
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;