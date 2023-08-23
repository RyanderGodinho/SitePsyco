import './styles.css';
import Header from '../../components/Header/Header.jsx';
import Welcome from '../../components/Welcome/Welcome.jsx';
import Sobre from '../../components/Sobre/sobre.jsx';
import Products from '../../components/Products/Products.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Whats from '../../components/Whats/Whats';

function Main() {
  return (
    <main>
      <Header />
      <Welcome />
      <Sobre />
      <Products />
      <Footer />
      <Whats />
    </main>
  )
}

export default Main
