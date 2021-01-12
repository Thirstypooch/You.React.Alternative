import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Inicie sesión</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Inicie sesión</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Pago</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Pago</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Finalice la orden</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Finalice la orden</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default CheckoutSteps
