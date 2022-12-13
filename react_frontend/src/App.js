import './App.css';
import {useState, useEffect} from 'react'


function App() {
  
  const [backendData, setBackendData] = useState([{}])

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
    <div className="App">
      {(typeof backendData.siema)}
    </div>
  );
}

export default App;