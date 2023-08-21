import './welcome.css';
import Card from '../../components/Card/Card.jsx';
import imgAlarme from '../../assets/alarme.jpg';
import imgServico from '../../assets/servico.jpg';
import imgEletrica from '../../assets/eletrica.jpg';
import React from 'react'

function Welcome() {
    const [acessorios, setAcessorios] = React.useState(['Som', 'Alarmes', 'Lampadas de led', 'Anti-furtos', 'Rastreadores']);
    const [servicos, setServicos] = React.useState(['Películas', 'Higienização', 'Madeiramentos', 'Acrílicos']);
    const [eletrica, setEletrica] = React.useState(['Manutenção de Alternador', 'Manutenção de motor de partida']);
    return(
        <section className='container-welcome flex'>
            <div className='container-img-welcome'>
                <div className='container-data-welcome flex'>

                <h1>
                    O MELHOR PARA O SEU CARRO
                </h1>
                <h2>
                    SOM, ALARME, PELÍCULAS E ACESSÓRIOS AUTOMOTIVOS
                </h2>
                    <button onClick={console.log('hello')}>
                    SAIBA MAIS
                </button>
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