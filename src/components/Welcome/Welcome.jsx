import './welcome.css';
import Card from '../../components/Card/Card.jsx';
import imgAlarme from '../../assets/alarme.png';
import imgServico from '../../assets/servico.png';
import imgEletrica from '../../assets/eletrica.png';
import React from 'react'

function Welcome() {
    const [acessorios, setAcessorios] = React.useState(['Som', 'Alarmes', 'Lampadas de led', 'Anti-furtos', 'Rastreadores']);
    const [servicos, setServicos] = React.useState(['Películas', 'Higienização', 'Madeiramentos', 'Acrílicos']);
    const [eletrica, setEletrica] = React.useState(['Manutenção de Alternador', 'Manutenção de motor de partida']);

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
        <section className='container-welcome flex' id='home'>
            <div className='container-img-welcome'>
                <div className='container-data-welcome flex hidden'>

                    <h1>
                        O MELHOR PARA O SEU CARRO
                    </h1>
                    <h2>
                        SOM, ALARME, PELÍCULAS E ACESSÓRIOS AUTOMOTIVOS
                    </h2>
                    <a href='#sobre'>
                        <button>
                            SAIBA MAIS
                        </button>
                    </a>
                </div>
            </div>
            <div className='container-apresentation flex'>
                <Card
                    title='ACESSÓRIOS'
                    picture={imgAlarme}
                    descriptions={acessorios}
                />
                <Card
                    title='SERVIÇOS'
                    picture={imgServico}
                    descriptions={servicos}
                />
                <Card
                    title='ELETRICA'
                    picture={imgEletrica}
                    descriptions={eletrica}
                />
            </div>
            <div className='container-decoration-footer'>
            </div>
        </section>
    )
}

export default Welcome;
