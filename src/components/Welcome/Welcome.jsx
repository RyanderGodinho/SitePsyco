import './welcome.css';
import Card from '../../components/Card/Card.jsx';
import imgAlarme from '../../assets/alarme.jpg';
import imgServico from '../../assets/servico.jpg';
import imgEletrica from '../../assets/eletrica.jpg';

function Welcome(){
    return(
        <section className='container-welcome'>
                <div className='container-data-welcome flex'>

                <h1>
                    O MELHOR PARA O SEU CARRO
                </h1>
                <h2>
                    SOM, ALARME, PELÍCULAS E ACESSÓRIOS AUTOMOTIVOS
                </h2>
                <button>
                    SAIBA MAIS
                </button>
            </div>
            <div className='container-apresentation flex'>
                <Card 
                    title='ACESSÓRIOS'
                    picture={imgAlarme}
                    descriptions={'Som Alarmes Lampadas de led Anti-furto Rastreadores'}
                />
                <Card 
                    title='SERVIÇOS' 
                    picture={imgServico}  
                />
                <Card 
                    title='ELETRICA' 
                    picture={imgEletrica} 
                     
                />
            </div>
        </section>
    )
}

export default Welcome;