import './card.css';

function Card(picture, description){
    return(
        <div className='container-card flex'>
            <img src={ !picture ? picture : '' } alt='service-picture' />
            <div className='card-description'>
                { !description ? description : 'text' }
            </div>
        </div>
    )
}

export default Card;