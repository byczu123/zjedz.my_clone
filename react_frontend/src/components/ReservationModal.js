import React, { useState, useRef, useEffect, useContext } from 'react'
import '../styles/ReservationModal.css'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown } from 'react-bootstrap'
import ReservationSummary from './ReservationSummary';
import { Context } from '../context/appContext';


const ReservationModal = (props) => {
    
    const hours = ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]
    const people = [2, 4, 6]
    
    const {store, actions} = useContext(Context)

    const [show, setShow] = useState(props.show);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [currentPeople, setCurrentPeople] = useState(store.currentPeople)
    const [activeIndex, setActiveIndex] = useState(props.activeIndex)
    const [hour, setHour] = useState(hours[activeIndex])
    const [activeButton, setActiveButton] = useState('reservation-data-button')

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const restaurantName = props.restaurantName
    
    console.log('ReservationModal rendered. Parameters', activeIndex, hour, date, ' show: ', show)

    const switchActiveHour = (index) => {
        setActiveIndex(index)
    }

    const switchActiveNavigation = event => {
        setActiveButton(event.target.dataset.button)
    }

    useEffect(() => {
        setShow(props.show)
        setActiveIndex(props.activeIndex)
    }, [props.show, props.activeIndex])

    useEffect(() => {
        setHour(hours[activeIndex])
    }, [activeIndex])

    useEffect(() => {
        setCurrentPeople(store.currentPeople)
    }, [store.currentPeople])

    return (
        <>
            <Modal show={show} onHide={props.onHide}>
                <Modal.Header closeButton className='reservation-modal-header'>
                    <div className='reservation-title-container'>
                        <Modal.Title className='reservation-modal-title'>{restaurantName}</Modal.Title>
                    </div>
              </Modal.Header>
              <Modal.Body className='reservation-modal'>
                  <div className='reservation-modal-navigation' style={{display: 'flex', justifyContent: 'center'}}>
                  <button data-button='reservation-data-button' 
                    className={activeButton === 'reservation-data-button' ? 'active' : ''} onClick={switchActiveNavigation}>
                        REZERWACJA
                    </button>
                    <button data-button='reservation-sumup-button'
                    className={activeButton === 'reservation-sumup-button' ? 'active' : ''} onClick={switchActiveNavigation}>
                        PODSUMOWANIE
                    </button>
                  </div>
                  { activeButton === 'reservation-data-button' ?
                    <>
                  <div className='reservation-form'>
                    <input type="date" id="reservation-dropdown-button" value={date} onChange={(e) => {setDate(e.target.value)}}></input>
                    <DropdownButton id="reservation-dropdown-button" title={`${currentPeople} ${currentPeople !== 6 ? 'osoby' : 'osób'}`}>
                        {
                        people && people.map((value, index) => {
                            return <Dropdown.Item key={index} as="button" onClick={() => {
                            setCurrentPeople(value)
                            }}>{`${value} ${value !== 6 ? 'osoby' : 'osób'}`}</Dropdown.Item>
                        }) 
                        }
                    </DropdownButton>
                  </div>
                  <div className='reservation-pagination'>
                    {hours.map((hour, index) => {
                        return <button key={index} name='active-hour' className={`pagination-button ${index === activeIndex ? 'active-hour' : ''}`} onClick={(e) => {
                            switchActiveHour(index)
                            setHour(e.target.innerHTML)
                            console.log('Aktywna godzina to ', e.target.innerHTML)
                        }}>{hour}</button>
                    })}
                    </div>
                    <div className='reservation-next'>
                        <button id='next-reservation' onClick={() => {setActiveButton("reservation-sumup-button")}}>Dalej</button>
                    </div>
                    </>
                    :
                    <ReservationSummary hour={hour} date={date} peopleValue={currentPeople} restaurantName={restaurantName}/>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ReservationModal