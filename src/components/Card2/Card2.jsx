import './card2.css';
import React from 'react';

export default function Card2({ image }) {
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
        <div className='container-card2 hidden'>
            {image && <img src={image} alt='picture-products' />}
        </div>
    )
}