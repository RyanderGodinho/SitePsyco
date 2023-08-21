import './card2.css';

export default function Card2({ image }) {
    return (
        <div className='container-card2'>
            {image && <img src={image} alt='picture-products' />}
        </div>
    )
}