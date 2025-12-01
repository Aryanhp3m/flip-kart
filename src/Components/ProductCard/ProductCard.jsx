import React from 'react'
import './ProductCard.css'

const ProductCard = ({ img, title, offer }) => {
    return (
        <div className='product-card'>
            <div className='product-img-box'>
                <img src={img} alt="" />
            </div>


            <p className='product-title'>{title}</p>
            <p className='prodcut-offer'>{offer}</p>

        </div>
    )
}

export default ProductCard



