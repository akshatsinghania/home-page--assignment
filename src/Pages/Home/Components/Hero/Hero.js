import React from 'react'
import styled from 'styled-components'
import HomePageBackground from '../../../../Assets/Images/HomePageBackground.png'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import ProgressBar from '../../../../Assets/Images/ProgressBar.png'

const Styles = styled.div`
  background: #0a0b1a;
  .hero {
    overflow: hidden;
  }
  .hero__backgroundImage {
    height: 100%;
    margin-top: -6%;
    width: 100%;
    left: 1px;
    top: -2px;
    object-fit: cover;
    background: linear-gradient(
      180deg,
      rgba(5, 11, 20, 0.28) 0%,
      rgba(1, 13, 32, 0.69) 67.53%,
      #0a0b1a 85.33%
    );
  }
  .hero__content {
    margin-top: -40%;
  }
  .hero__title {
    font-family: Libre Baskerville;
    color: #fff;
    font-weight: bold;
    font-size: 80px;
  }
  .hero__subTitle {
    color: #ccc;
  }

  @media only screen and (max-width: 800px) {
    .hero__content {
      margin-top: -200%;
    }
    .hero__backgroundImageContainer {
      margin-top: -20%;
      width: 100%;
      height: 1000px;
      overflow: hidden;
    }
  }
`

const Hero = () => {
  return (
    <Styles className='hero'>
      <div className='hero__backgroundImageContainer'>
        <Image className='hero__backgroundImage' src={HomePageBackground} />
      </div>
      <Container className='hero__content'>
        <h1 className='hero__title'>Cari Cari</h1>
        <p className='hero__subTitle'>
          Live from their sofa to yours. Get closer to your favorite artists,
          and never miss out.
        </p>

        <Image src={ProgressBar} />
        <Image src={ProgressBar} />
        <Image src={ProgressBar} />
      </Container>
    </Styles>
  )
}

export default Hero
