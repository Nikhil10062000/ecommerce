import React from 'react'
import {Container} from 'react-bootstrap'
import Products from './Products'
const Home = () => {
  return (
    <>
    <div className='home '>
       <Container className="bw-bolder  ">
       <h1> FESTIVE SEASON ARRIVES !!</h1>
       <h3>CHECK OUT ALL STORE </h3>
      </Container> 
    </div>
      <Products/>
    </>
  )
}

export default Home
