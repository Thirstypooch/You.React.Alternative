import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

import axios from 'axios'

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)

      setProduct(data)
    }

    fetchProduct()
  }, [match])
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Regresa
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>{product.aspect}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>${product.price}</ListGroup.Item>
            <ListGroup.Item>{product.fit}</ListGroup.Item>
            <ListGroup.Item>{product.use}</ListGroup.Item>
            <ListGroup.Item>{product.ingredients}</ListGroup.Item>
            <ListGroup.Item>{product.allIngredients}</ListGroup.Item>
            <ListGroup.Item>{product.aroma}</ListGroup.Item>
            <ListGroup.Item>{product.warning}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Precio:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'En stock' : 'Fuera de stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Añadir al carrito
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
