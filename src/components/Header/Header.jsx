import './header.css';
import logo from '../../assets/logo-psyco.svg';
import Navbar from '../NavBar/NavBar';
import React from 'react';

function Header() {
  React.useEffect(() => {
    const inObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          { entry.target.classList.add('show') }
        }
      })
    })
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => {
      inObserver.observe(element)
    })
  })

  return (
    <header className='container-header flex'>
      <img className='hidden' src={logo} alt='logo loja' />
      <Navbar />
    </header>
  )
}

export default Header;