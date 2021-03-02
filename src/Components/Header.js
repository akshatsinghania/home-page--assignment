import React from 'react'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Logo from '../Assets/Images/Logo.png'
import SearchIcon from '../Assets/Images/SearchIcon.png'
import CartIcon from '../Assets/Images/CartIcon.svg'
import { Link } from 'react-router-dom'

const Styles = styled.div`
  .color-light {
    color: #ccc;
  }
  .link:hover {
    text-decoration: none;
  }
`

const Header = () => {
  return (
    <Styles>
      <Navbar collapseOnSelect expand='lg'>
        <Navbar.Brand href='/'>
          <img className='ml-5' src={Logo} alt='' />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          className='justify-content-end ml-0'
          id='responsive-navbar-nav'>
          <Nav>
            <Link className='ml-2 mr-2 color-light link' to='/Search'>
              <img className='mr-1' src={SearchIcon} />
              Search
            </Link>
            <Link className='ml-2 mr-2 color-light link' to='/Help'>
              Help
            </Link>
            <Link className='ml-2 mr-2 color-light link' to='/Account'>
              Account
            </Link>
            <Link className='ml-2 mr-2 color-light link' to='/cart'>
              <img className='mr-1' src={CartIcon} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )
}

export default Header
