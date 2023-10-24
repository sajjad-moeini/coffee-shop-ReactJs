import React, { useState } from 'react'
import './HeaderNav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

export default function HeaderNav() {

const[bgColor,setBgColor]= useState('')
const [navItemColor,setNavItemColor]=useState('white')
const [navlogo,setNavLogo]=useState("images/home/logo-2.png")
       window.document.addEventListener('scroll', () => {
              if (window.scrollY > 0) {
                setBgColor('white')
                setNavItemColor('#000')
                setNavLogo("images/home/logo-1.png")
               
              } else {              
                setBgColor('transparent')
                setNavItemColor('#fff')   
                setNavLogo("images/home/logo-2.png")          
              }
            })
  return (
    <>
    <Navbar fixed="top" className='header-nav-container' expand="lg" style={{ background: bgColor }} >
      <Container>
        <Navbar.Brand href="#home">
              <img src={navlogo} className='img-fluid logo'  alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center justify-content-around w-75">
            <NavLink to={'/'} style={{color:navItemColor}} className={(item)=>(item.isActive ? 'headerNav-item-active':'headerNav-item')}>Home</NavLink>
            <NavLink to={'/menu'} style={{color:navItemColor}} className={(item)=>(item.isActive ? 'headerNav-item-active':'headerNav-item')}>Menu</NavLink>
            <NavLink to={'/reservation'} style={{color:navItemColor}} className={(item)=>(item.isActive ? 'headerNav-item-active':'headerNav-item')}>Reservation</NavLink>
            <NavLink to={'/account'} style={{color:navItemColor}} className={(item)=>(item.isActive ? 'headerNav-item-active':'headerNav-item')}>Account</NavLink>
            <NavLink to={'/cart'} style={{color:navItemColor}} className={(item)=>(item.isActive ? 'headerNav-item-active':'headerNav-item')}>
              <i className='fa fa-shopping-cart'></i>
            </NavLink>
            <Link  className={'headerNav-item'} style={{color:navItemColor}}>
              <i className='fa fa-search'></i>
            </Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
