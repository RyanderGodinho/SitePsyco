import './products.css';
import React from 'react';
import Card2 from '../Card2/Card2.jsx';
import Card3 from '../Card3/Card3.jsx';
import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg';
import product4 from '../../assets/product4.jpg';
import product5 from '../../assets/product9.jpg';
import product6 from '../../assets/product6.jpg';
import product7 from '../../assets/product7.jpg';
import product8 from '../../assets/product8.jpg';
import product9 from '../../assets/product9.jpg';
import product10 from '../../assets/product10.jpg';
import product11 from '../../assets/product11.jpg';
import product12 from '../../assets/product12.jpg';


export default function Products() {
    const [products1, setProducts1] = React.useState([product1, product2, product3, product4, product5, product6, product7, product8, product9,])
    const [products2, setProducts2] = React.useState([product10, product11, product12,])
    return (
        <section className='container-section-products flex'>
            {products1.map((product, length) => {
                return (
                    <div key={length}>
                        <Card2 image={product} />
                    </div>
                );
            })}
            {products2.map((product) => {
                return (
                    <div key={product}>
                        <Card3 image={product} />
                    </div>
                );
            })}
        </section>
    )
}