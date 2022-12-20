import React from 'react'
import './HomeForm.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown } from 'react-bootstrap'

const HomeForm = () => {
    return (
        <div className='home-form-container'>
          <div className="home-form">
              <div className="home-form-description">
                  <h1>Odkrywaj lokalną gastronomię</h1>
                  <h2>Zarezerwuj miejsce</h2>
              </div>
              <div className="home-form-dropdown">
                <DropdownButton id="dropdown-item-button" title="Kraków">
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-item-button" title="2022-12-20">
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-item-button" title="18:00">
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-item-button" title="2 osoby">
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="home-form-description">
                  <h3>lub wyszukaj</h3>
                  <input></input>
              </div>
              <div className='home-form-button-container'>
                  <button>Szukaj</button>
              </div>
          </div>
        </div>
    )
}

export default HomeForm