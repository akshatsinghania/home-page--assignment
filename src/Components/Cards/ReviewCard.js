import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Styles = styled.div`
  .reviewcard {
    margin: 3%;
    padding: 10px;
    border-radius: 10px;
    border-style: solid;
    border-color: #e5af56;
    background-color: #0a0b1a;
    /*Shadow Effect*/
    box-shadow: 15px -8px 0px 0px #276c73;
    border-radius: 10px;
  }
  .reviewcard__fromImage {
    object-fit: contain;
    width: 10%;
  }
  .reviewcard__fromDetails {
    display: flex;
    margin: 10% 0;
  }
  .reviewcard__fromName {
    margin: 4%;
    font-family: Quattrocento;
    font-size: x-large;
    font-weight: 700;
    color: #ffff;
    margin-bottom: 0 !important;
  }
  .reviewcard__reviewDescription {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-family: Nunito;
    color: #ffff;
    font-size: large;
    font-weight: 400;
  }
  .reviewcard__fromCountry {
    margin-top: -10%;
    margin-left: 10%;
    width: 10%;
    object-fit: contain;
  }
  .reviewcard__fromLocation {
    margin-top: -8%;
    margin-left: 5%;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: large;
    line-height: 16px;
    text-transform: uppercase;
    color: #e5c558;
  }
`

const ReviewCard = ({
  fromName,
  fromImage,
  fromLocation,
  fromCountry,
  reviewDescription,
}) => {
  return (
    <Styles>
      <Card className='reviewcard'>
        <div className='reviewcard__from'>
          <div className='reviewcard__fromDetails'>
            <Card.Img className='reviewcard__fromImage' src={fromImage} />
            <Card.Title className='reviewcard__fromName'>{fromName}</Card.Title>
          </div>
          <div className='reviewcard__fromDetails'>
            <Card.Img className='reviewcard__fromCountry' src={fromCountry} />
            <Card.Subtitle className='reviewcard__fromLocation'>
              {fromLocation}
            </Card.Subtitle>
          </div>
        </div>
        <Card.Body>
          <Card.Text className='reviewcard__reviewDescription'>
            {reviewDescription}
          </Card.Text>
        </Card.Body>
      </Card>
    </Styles>
  )
}

export default ReviewCard
