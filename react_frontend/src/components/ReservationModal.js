import React, {useState, useRef, useEffect, useContext} from 'react'
import '../styles/ReservationModal.css'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown } from 'react-bootstrap'
import { Pagination } from 'react-bootstrap';

const ReservationModal = (props) => {
    
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [peopleValue, setPeopleValue] = useState("2 osoby")
    const [hour, setHour] = useState("14:00")
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const hours = ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]
    const people = ["2 osoby", "3 osoby", "4 osoby", "5 osób", "6 osób"]

    return (
        <>
          <Link className='restaurant_link' onClick={handleShow}>
               ZAREZERWUJ
          </Link>
    
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className='reservation-modal-header'>
                    <div className='reservation-title-container'>
                        <Modal.Title className='reservation-modal-title'>{props.restaurantName}</Modal.Title>
                    </div>
              </Modal.Header>
              <Modal.Body className='reservation-modal'>
                  <div className='reservation-modal-navigation' style={{display: 'flex', justifyContent: 'center'}}>
                      <button className='active'>
                          DOKONAJ REZERWACJI
                      </button>
                  </div>
                  <div className='reservation-form'>
                    <input type="date" id="reservation-dropdown-button" value={date} onChange={(e) => {setDate(e.target.value)}}></input>
                    <DropdownButton id="reservation-dropdown-button" title={peopleValue}>
                        {
                        people && people.map((value, index) => {
                            return <Dropdown.Item key={index} as="button" onClick={() => {
                            setPeopleValue(value)
                            }}>{value}</Dropdown.Item>
                        }) 
                        }
                    </DropdownButton>
                  </div>
                  <div className='reservation-pagination'>
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                    </div>
              </Modal.Body>
          </Modal>
        </>
      );
}

export default ReservationModal