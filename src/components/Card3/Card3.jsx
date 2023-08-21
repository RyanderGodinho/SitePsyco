import './card3.css';

export default function Card3({ image }) {
    return (
        <div className='container-card3'>
            {image && <img src={image} alt='picture-products' />}
        </div>
    )
}