import './navbar.css';

function Navbar(){
    return(
    <div className='container-all-navbar flex'>
        <div className='container-info flex'>
            <p>(61) 9 7402-8327</p>
            <p>AV 15 DE JUNHO VALPARAISO 2 EM FRENTE A PADOKA</p>
        </div>
        <nav className="container-navbar">
            <ul className="navbar flex">
                <li>
                    Home
                </li>
                <li>
                    Produtos e serviços
                </li>
                <li>
                    Contato
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default Navbar;