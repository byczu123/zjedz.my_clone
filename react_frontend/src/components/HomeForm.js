import React, { useState, useEffect, useContext, createContext } from 'react'
import '../styles/HomeForm.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown } from 'react-bootstrap'
import { Context } from '../context/appContext'

const HomeForm = () => {

  // const [locations, setLocations] = useState(null)
  const [currentLocation, setCurrentLocation] = useState('Wszystkie miasta')
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0])
  const [currentHour, setCurrentHour] = useState("14:00")
  const [currentPeople, setCurrentPeople] = useState(2)

  const { store, actions } = useContext(Context)

  const hours = ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]
  const people = [2, 4, 6]
  const locations = ["Kraków", "Poznań", "Warszawa", "Gdańsk"]

  console.log('HomeForm rendered. Data from store: ', currentLocation, currentHour, currentDate, currentPeople)

  useEffect(() => {
    // fetch('/data/get/home-form')
    //   .then(res => {
    //     if (res.status === 200) return res.json()
    //   })
    //   .then(data => {
    //     setLocations(data)
    //     // setcurrentLocation(data[0].location)
    //     console.log('Location: ', data)
    //   })
    
    actions.setCurrentLocation(currentLocation)
    actions.setCurrentHour(currentHour)
    actions.setCurrentDate(currentDate)
    actions.setCurrentPeople(currentPeople)
    console.log('UseEffect w HomeForm jednorazowo wywołany. Ustawiono Store na wartości ', currentLocation, currentHour, currentDate, currentPeople)
  }, [])

  return (
    <div className='home-form-container'>
      <div className="home-form">
        <div className="home-form-description">
          <h1>Odkrywaj lokalną gastronomię</h1>
          <h2>Zarezerwuj miejsce</h2>
        </div>
        <div className="home-form-dropdown">
          <DropdownButton id="dropdown-item-button" title={currentLocation}>
            {
              locations && locations.map((value, index) => {
                return <Dropdown.Item key={index} as="button" onClick={() => {
                  console.log(value)
                  setCurrentLocation(value)
                  actions.setCurrentLocation(value)
                }}>{value}</Dropdown.Item>
              })
            }
          </DropdownButton>
          {/* <DropdownButton id="dropdown-item-button" type="currentDate" title="2022-11-21">
                </DropdownButton> */}
          <input type="date" id="dropdown-item-button" value={currentDate} onChange={(e) => { 
            console.log(e.target.value)
            setCurrentDate(e.target.value)
            actions.setCurrentDate(e.target.value)
            }}></input>
          <DropdownButton id="dropdown-item-button" title={currentHour}>
            {
              hours && hours.map((value, index) => {
                return <Dropdown.Item key={index} as="button" onClick={() => {
                  console.log(value)
                  setCurrentHour(value)
                  actions.setCurrentHour(value)
                }}>{value}</Dropdown.Item>
              })
            }
          </DropdownButton>
          <DropdownButton id="dropdown-item-button" title={`${currentPeople} ${currentPeople !== 6 ? 'osoby' : 'osób'}`}>
            {
              people && people.map((value, index) => {
                return <Dropdown.Item key={index} as="button" onClick={() => {
                  console.log(value)
                  setCurrentPeople(value)
                  actions.setCurrentPeople(value)
                }}>{`${value} ${value !== 6 ? 'osoby' : 'osób'}`}</Dropdown.Item>
              })
            }
          </DropdownButton>
        </div>
        <div className="home-form-description">
          <h3>lub wyszukaj</h3>
          <input placeholder='restauracje...'></input>
        </div>
        <div className='home-form-button-container'>
          <button>Szukaj</button>
        </div>
      </div>
    </div>
  )
}

export default HomeForm