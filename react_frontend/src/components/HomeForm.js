import React, { useState, useEffect, useContext, createContext } from 'react'
import '../styles/HomeForm.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown } from 'react-bootstrap'
import { Context } from '../context/appContext'
import ReservationModal from './ReservationModal'


const HomeForm = () => {
  
  const [locations, setLocations] = useState(null)
  const [locationValue, setLocationValue] = useState('Wszystkie miasta')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [hour, setHour] = useState("14:00")
  const [peopleValue, setPeopleValue] = useState("2 osoby")
  
  const {store, actions} = useContext(Context)

  const hours = ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]
  const people = ["2 osoby", "3 osoby", "4 osoby", "5 osób", "6 osób"]

  console.log('HomeForm rendered. Data: ', store.currentLocation, hour, date, peopleValue)

  useEffect(() => {
    fetch('/data/get/home-form')
        .then(res => {
            if (res.status === 200) return res.json()
        })
        .then(data => {
            setLocations(data)
            // setLocationValue(data[0].location)
            console.log('Location: ', data)
        })
    
  }, [])

  return (
        <div className='home-form-container'>
          <div className="home-form">
              <div className="home-form-description">
                  <h1>Odkrywaj lokalną gastronomię</h1>
                  <h2>Zarezerwuj miejsce</h2>
              </div>
              <div className="home-form-dropdown">
                <DropdownButton id="dropdown-item-button" title={locationValue}>
                {
                  locations && locations.map((value, index) => {
                    return <Dropdown.Item key={index} as="button" onClick={() => {
                      console.log(value.location)
                      setLocationValue(value.location)
                      actions.setCurrentLocation(value.location)
                    }}>{value.location}</Dropdown.Item>
                  }) 
                }
                </DropdownButton>
                {/* <DropdownButton id="dropdown-item-button" type="date" title="2022-11-21">
                </DropdownButton> */}
                <input type="date" id="dropdown-item-button" value={date} onChange={(e) => {setDate(e.target.value)}}></input>
                <DropdownButton id="dropdown-item-button" title={hour}>
                {
                  hours && hours.map((hour, index) => {
                    return <Dropdown.Item key={index} as="button" onClick={() => {
                      setHour(hour)
                    }}>{hour}</Dropdown.Item>
                  }) 
                }
                </DropdownButton>
                <DropdownButton id="dropdown-item-button" title={peopleValue}>
                {
                  people && people.map((value, index) => {
                    return <Dropdown.Item key={index} as="button" onClick={() => {
                      setPeopleValue(value)
                    }}>{value}</Dropdown.Item>
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