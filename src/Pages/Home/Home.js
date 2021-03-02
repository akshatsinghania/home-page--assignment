import React from 'react'
import Hero from './Components/Hero/Hero'
import Header from '../../Components/Header'
import Body from './Components/Body/Body'
import Container from 'react-bootstrap/Container'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Body />
    </div>
  )
}

export default Home
