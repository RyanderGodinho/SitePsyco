import "./footer.css";
import logo from '../../assets/logo-psyco.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import whats from '../../assets/whats-logo.svg';

export default function Footer() {
    return (
        <footer className="container-footer flex">
            <div className="apresentation flex">
                <img className="logo-footer" src={logo} alt="logo-psyco" />
                <p className="apresentation-text">Oferecemos apenas o melhor em termos de desempenho e inovação. Não aceitamos nada além da excelência.</p>
                <div className="social-midia flex">
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={whats} />
                </div>
            </div>
            <div className="pages flex">
                <p className="pages-title">CONTATOS</p>
                <div className="pages-content">
                    <p className="text-pages">(61) 9 7402-8327</p>
                    <p className="text-pages">psycosoundcar@gmail.com</p>
                </div>
            </div>
            <div className="location">

            </div>
        </footer>
    )
}