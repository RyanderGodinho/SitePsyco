/* eslint-disable react/prop-types */
import './card.css';

function Card({ picture, title, descriptions }) {
    return (
        <div className='container-card flex'>
            <div className='container-card-div1'>
                <img src={picture} alt='service-picture' />
            </div>
            <div className='container-card-div2 flex'>
                <h1>{title}</h1>
                <h2>{descriptions}</h2>
            </div>
            <div className='container-card-div3'></div>
        </div>
    )
}

export default Card;