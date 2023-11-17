import './navbar.css';
import React from 'react';
import MiniMenu from '../../assets/cardapio.svg'

function Navbar({ openMenu, setOpenMenu }) {
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

    function handleOpenMenu() {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <div className='container-all-navbar flex'>
                <div className='container-info flex hidden'>
                    <p>(61) 9 7402-8327</p>
                    <p>AV 15 DE JUNHO VALPARAISO 2 EM FRENTE A PADOKA</p>
                </div>
                <nav className="container-navbar hidden">
                    <ul className="navbar flex">
                        <li>
                            <a className='link' href='https://www.psyco.vercel.app' >Home</a>
                        </li>
                        <li>
                            <a className='link' href='#products'>Produtos e serviços</a>
                        </li>
                        <li>
                            <a className='link' href='#footer'>Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <img onClick={() => handleOpenMenu()} id='container-mini-navbar' className='hidden' src={MiniMenu} alt='menu' />
        </>
    )
}

export default Navbar;
