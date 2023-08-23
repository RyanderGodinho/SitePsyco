import './card3.css';
import React from 'react';

export default function Card3({ image }) {
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
        <div className='container-card3 hidden'>
            {image && <img src={image} alt='picture-products' />}
        </div>
    )
}