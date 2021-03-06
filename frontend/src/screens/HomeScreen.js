import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'

import Carousel from 'react-bootstrap/Carousel'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'


const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch, keyword])

  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item interval={1000}>
          <img
            className='d-block w-100 carouselPic'
            src={img1}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Creemos en el poder de lo natural </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carouselPic'
            src={img2}
            alt='Second slide'
          />

          <Carousel.Caption>
            <p>
              Creamos productos naturales para el cuidado de la piel efectivos
              de gran calidad ,orgánicos, de alta concentración y no tóxicos.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 className='text-center py-3'>Últimos productos</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
