import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'
import { useRef, useState, useContext, useEffect } from 'react'
import { Context } from '../context/appContext'

function RegisterModal(props) {

  const navigate = useNavigate()
  const emailInput = useRef()
  const passwordInput = useRef()
  const usernameInput = useRef()
  const {store, actions} = useContext(Context)

  const [message, setMessage] = useState(null)

  useEffect(() => {
    if (store.email && store.username) {
      navigate('/')
      console.log('Redirected from RegisterPage to HomePage')
    }
  }, [store.email, store.username])

  
  const submitRegistration = () => {
    const username = usernameInput.current.value
    const email = emailInput.current.value
    const password = passwordInput.current.value
  
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    }
    fetch('/auth/register', options)
    .then(res => {
      if (res.status === 200) return res.json()
    })
    .then(data => {
      console.log(data)
      setMessage(data.message)
      if(data.message === 'Użytkownik został zarejestrowany pomyślnie.') {
        navigate('/login')
      }
    })
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <input name="username" className='register-input' placeholder="Username" type="text" ref={usernameInput}></input>
              <input name="email" className='register-input' placeholder="E-mail" type="text" ref={emailInput}></input>
              <input name="password" className='register-input' placeholder="Password" type="password" ref={passwordInput}></input>
              <button onClick={submitRegistration}>Confirm</button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default RegisterModal;