import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import TicketIcon from '../../Assets/Images/TicketIcon.png'

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');
  .showcard {
    background-color: #111229;
    /*Shadow Effect*/
    box-shadow: 15px -8px 0px 0px rgba(48, 26, 104, 1);
    border-radius: 10px;
  }
  .showcard__title {
    font-family: Libre Baskerville;
    font-style: normal;
    font-weight: bold;
    font-size: xx-large;
    margin-left: 10%;
  }
  .showcard__tag {
    font-size: 30%;
    width: min-content;
    padding: 0 2%;
    margin: 1%;
    border-radius: 2px;
  }
  .showcard__body {
    display: flex;
    justify-content: space-between;
  }
  .showcard__bodyTicketIcon {
    object-fit: contain;
  }
  .showcard__link {
    font-size: 16px;
  }
  .showcard__link:hover {
    text-decoration: none;
  }
  .vl {
    border-left: 1px solid #ccc;
  }
`

const ShowCard = ({ img, title, link, tag }) => {
  return (
    <Styles>
      <Card
        className='showcard'
        text='white'
        className='showcard'
        style={{ width: '18rem' }}>
        <Card.Img variant='top' src={img} />
        <Button size='sm' className='showcard__tag' variant='warning'>
          {tag}
        </Button>
        <Card.Title className='showcard__title'>{title}</Card.Title>
        <Card.Body className='showcard__body'>
          <Link className='showcard__link'>More Info-></Link>
          <div class='vl'></div>
          <img className='showcard__bodyTicketIcon' src={TicketIcon} alt='' />
        </Card.Body>
      </Card>
    </Styles>
  )
}

export default ShowCard
