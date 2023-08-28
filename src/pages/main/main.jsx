import './styles.css';
import React from 'react'
import Header from '../../components/Header/Header.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import Welcome from '../../components/Welcome/Welcome.jsx';
import Sobre from '../../components/Sobre/sobre.jsx';
import Products from '../../components/Products/Products.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Whats from '../../components/Whats/Whats';

function Main() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <main>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <Menu />}
      <Welcome />
      <Sobre />
      <Products />
      <Footer />
      <Whats />
    </main>
  )
}

export default Main
