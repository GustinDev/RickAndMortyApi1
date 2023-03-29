import React from 'react';
// import SearchBar from './SearchBar';
//NavBar - BT
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <Navbar bg='dark' variant='dark' expand='md' className='w-100 p-3'>
      <Container>
        <Link className='m-1' to='/home'>
          <Navbar.Brand>Ricky Martin Wiki</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className='d-flex justify-content-end '
        >
          <Nav className='d-flex justify-content-end'>
            <Link to='/home' className='m-1'>
              <h4>Home</h4>
            </Link>
            <Link className='m-1' to='/about'>
              <h4>About</h4>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* <SearchBar onSearch={props.onSearch} /> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
