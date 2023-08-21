import './styles.css';
import Header from '../../components/Header/Header.jsx';
import Welcome from '../../components/Welcome/Welcome.jsx';
import Sobre from '../../components/Sobre/sobre.jsx';
import Products from '../../components/Products/Products.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Main() {
  return (
    <main>
      <Header />
      <Welcome />
      <Sobre />
      <Products />
      <Footer />
    </main>
  )
}

export default Main
