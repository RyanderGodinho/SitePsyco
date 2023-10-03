import "./menu.css";

export default function Menu() {
    return (
        <div className='container-all-menu flex'>
            <nav className="container-menu">
                <ul className="menu flex">
                    <li>
                        <a className='link-menu' href='#home' >Home</a>
                    </li>
                    <li>
                        <a className='link-menu' href='#products'>Produtos</a>
                    </li>
                    <li>
                        <a className='link-menu' href='#footer'>Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
