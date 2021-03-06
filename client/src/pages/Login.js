import React, {useContext} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useFormInput } from '../customHooks/useFormInput'
import { AuthContext } from '../providers/AuthProvider'
import {useHistory} from 'react-router-dom'

const Login = () => {
  //call history from react-router-dom so that we can pass it to AuthProvider so it can be used
  //in that file
  const history = useHistory()
  //passing handleLogin from AuthContext
  const {handleLogin} = useContext(AuthContext)
  //using the custom form input hook(initial value in field, label and placeholder for input)
  //need to drill down to get value. i.e. email.value
  //TODO: Remove dummy data.
  const email = useFormInput('orderlytest@gmail.com', 'Email')
  const password = useFormInput('12345678', 'Password')
  
  
  const handleSubmit = (e) => {
    //prevents page from refreshing
    e.preventDefault()
    //Front end validation
    //need to drill down to get value. i.e. email.value
    handleLogin({email: email.value, password: password.value}, history)
  }
  return(
    <>
    <h1>Login</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control {...email} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control {...password} type="password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Login