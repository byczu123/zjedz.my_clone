import React, { useState, useEffect, useContext, createContext } from 'react'
import '../styles/HomeForm.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown } from 'react-bootstrap'
import LocationContext from '../context/locationContext'
import { Context } from '../context/appContext'


const HomeForm = () => {
  const [locations, setLocations] = useState(null)
  const [days, setDays] = useState(null)
  const [hours, setHours] = useState(null)
  const [people, setPeople] = useState(null)
  const {store, actions} = useContext(Context)

  const [locationValue, setLocationValue] = useState('Wszystkie miasta')
  const [dayValue, setDayValue] = useState('')
  const [hourValue, setHourValue] = useState('')
  const [peopleValue, setPeopleValue] = useState('')

  console.log('HomeForm rendered. Location: ', store.currentLocation)

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
                  locations ? locations.map((value, index) => {
                    return <Dropdown.Item key={index} as="button" onClick={() => {
                      console.log(value.location)
                      setLocationValue(value.location)
                      actions.setCurrentLocation(value.location)
                    }}>{value.location}</Dropdown.Item>
                  }) 
                  : null
                  }
                </DropdownButton>
                {/* <DropdownButton id="dropdown-item-button" type="date" title="2022-11-21">
                </DropdownButton> */}
                <input type="date" id="dropdown-item-button"></input>
                <DropdownButton id="dropdown-item-button" title="18:00">
                </DropdownButton>
                <DropdownButton id="dropdown-item-button" title="2 osoby">
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