import './header.css';
import logo from '../../assets/logo-psyco.svg';
import Navbar from '../NavBar/NavBar';

function Header() {
  return (
    <header className='container-header flex'>
        <img src={logo} alt='logo loja' />
        <Navbar />
    </header>
  )
}

export default Header;