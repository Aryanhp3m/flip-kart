import React from 'react'
import './Card.css'


const Card = ({ img, name, price }) => {

    const handleClick = () => {
        console.log("print click")
    }
    return (
        <div className='card'
            onClick={handleClick}>
            <img src={img} alt="" />

            <div className="card-info">
                <p className='card-name'>{name}</p>
                <p className='card-price'>{price}</p>
            </div>

        </div>


    )
}

export default Card
