import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'

const Slide = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={img1}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Creemos en el poder de lo natural </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={img2}
          alt='Third slide'
        />

        <Carousel.Caption>
          <p>Creamos  productos naturales para el cuidado de la piel  efectivos de gran calidad ,orgánicos, de alta concentración y no tóxicos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={img3}
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slide
