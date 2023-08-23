import './card.css';
import React from 'react';

function Card({ picture, title, descriptions }) {
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
        <div className='container-card flex hidden'>
            <div className='container-card-div1'>
                <img src={picture} alt='service-picture' />
            </div>
            <div className='container-card-div2 flex'>
                <h1>{title}</h1>
                {descriptions && descriptions.map(description => {
                    return (
                        <h2 key={description}>
                            {description}
                        </h2>
                    )
                })}
                <span></span>
            </div>
            <div className='container-card-div3'></div>
        </div>
    )
}

export default Card;