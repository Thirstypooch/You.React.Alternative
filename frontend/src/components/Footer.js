import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{ background: '#FCF3E8' }}>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; YOU Organic Skincare
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
