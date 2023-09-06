import "./footer.css";
import logo from '../../assets/logo-psyco.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import whats from '../../assets/whats-logo.svg';
import coringa from '../../assets/coring.png';

export default function Footer() {
    return (
        <footer className="container-footer flex">
            <div className="apresentation flex">
                <img className="logo-footer" src={logo} alt="logo-psyco" />
                <p className="apresentation-text">Oferecemos apenas o melhor em termos de desempenho e inovação. Não aceitamos nada além da excelência.</p>
                <div className="social-midia flex">
                    <a alt='facebook-link' aria-label="acesse nosso facebook" href="https://www.facebook.com/PsycoSom/"><img src={facebook} alt="facebook-link" /></a>
                    <a alt='instagram-link' aria-label="acesse nosso instagram" href="https://www.instagram.com/psycosoundcar/"><img src={instagram} alt="instagram-link" /></a>
                    <a alt='whatsapp-link' aria-label="nos chame no whatsapp" href="https://api.whatsapp.com/send/?phone=%2B5561974028327&text&type=phone_number&app_absent=0"><img src={whats} alt="whatsapp-link" /></a>
                </div>
            </div>
            <div id="footer" className="pages flex">
                <p className="pages-title">CONTATOS</p>
                <div className="pages-content">
                    <p className="text-pages">(61) 9 7402-8327</p>
                    <p className="text-pages">psycosoundcar@gmail.com</p>
                </div>
            </div>
            <div className="location flex">
                <img src={coringa} alt='coringa-psyco' />
            </div>
        </footer>
    )
}