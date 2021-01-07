import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions.js'
import { Form } from 'react-bootstrap'
import { Button, Row, Col } from 'react-bootstrap'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <FormContainer>
      <h1>Inicie sesión</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Ingrese email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>contraseña</Form.Label>
          <Form.Control
            type='password'
            placeholder='Ingrese contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Ingrese
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Es clienta nueva?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Regístrese
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
