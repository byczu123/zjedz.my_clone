import './App.css';
import {useState, useEffect} from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
 
function App() {
  
  const [backendData, setBackendData] = useState(null)

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    )
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;