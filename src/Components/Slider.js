import React from 'react'
import { Carousel, Button } from 'react-bootstrap'



export default function Slider() {
  return (
    <div>

    <Carousel>
            <Carousel.Item >
            <div>
            <img
                className="d-block w-100 img-fluid"
                src="https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090815_960_720.jpg"
                alt="image1"
                />
            </div>
                
                <div className='carusel-position-text'>
                
                <h3>First slide label consectetur adipiscing elit</h3>
                <p>Lorem ipsum dolor sit amet. Duis quis hendrerit neque, quis molestie augue. Ut consequat, erat in sagittis consectetur, elit eros posuere sem, at fermentum urna metus semper purus. Maecenas sem quam, dictum a auctor eu, varius pulvinar nisi</p>
                <Button variant="secondary">More info</Button>
                </div>
                

            </Carousel.Item>
            
    </Carousel>
    </div>
  )
}
