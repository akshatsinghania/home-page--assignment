import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ShowCard from '../../../../Components/Cards/ShowCard'
import ReviewCard from '../../../../Components/Cards/ReviewCard'

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');
  background: #0a0b1a;
  .body__contentTitle {
    font-family: Libre Baskerville;
    color: #fff;
  }
  .body__contentTitleUnderline {
    margin-left: 0;
    width: 15%;
    border-color: #0259eb;
  }
  .body__contentLink {
    color: #e5c558;
  }
  .body__contentTop {
    display: flex;
    justify-content: space-between;
    margin: 5% 0;
  }
  .body__contentCards {
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (max-width: 800px) {
    .body {
      margin-top: -10% !important;
    }
    .body__contentCards {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`

const Body = () => {
  return (
    <Styles>
      <Container className='body'>
        <div className='body__content'>
          <div className='body__contentTop'>
            <h1 className='body__contentTitle'>
              Upcoming Shows
              <hr className='body__contentTitleUnderline' />
            </h1>

            <Link className='body__contentLink'>View All</Link>
          </div>
          <h1 className='body__contentCards'>
            <ShowCard
              img={'/Assets/Images/Shows/BennyDayal.png'}
              title={'Benny Dayal'}
              tag={'folk'}
            />
            <ShowCard
              img={'/Assets/Images/Shows/BennyDayal.png'}
              title={'Benny Dayal'}
              tag={'folk'}
            />
            <ShowCard
              img={'/Assets/Images/Shows/BennyDayal.png'}
              title={'Benny Dayal'}
              tag={'folk'}
            />
          </h1>
        </div>
        <div className='body__content'>
          <div className='body__contentTop'>
            <h1 className='body__contentTitle'>
              Reviews
              <hr className='body__contentTitleUnderline' />
            </h1>

            <Link className='body__contentLink'>View All</Link>
          </div>
          <h1 className='body__contentCards'>
            <ReviewCard
              fromName={'Hellen Jummy'}
              fromImage={'/Assets/Images/Reviews/HellenJummy.png'}
              reviewDescription={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
              laoreet adipiscing. `}
              fromCountry={'/Assets/Images/Reviews/US.png'}
              fromLocation={'Patlo CA'}
            />
            <ReviewCard
              fromName={'Hellen Jummy'}
              fromImage={'/Assets/Images/Reviews/HellenJummy.png'}
              reviewDescription={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
              laoreet adipiscing. `}
              fromCountry={'/Assets/Images/Reviews/US.png'}
              fromLocation={'Patlo CA'}
            />
            <ReviewCard
              fromName={'Hellen Jummy'}
              fromImage={'/Assets/Images/Reviews/HellenJummy.png'}
              reviewDescription={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
              laoreet adipiscing. `}
              fromCountry={'/Assets/Images/Reviews/US.png'}
              fromLocation={'Patlo CA'}
            />
          </h1>
        </div>
      </Container>
    </Styles>
  )
}

export default Body
