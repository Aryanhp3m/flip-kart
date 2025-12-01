import React, { useState } from 'react'
import './Hero.css'

const Hero = ({ images }) => {

    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1) % images.length);
    };


    return (
        <div className="carousel"
            style={{ backgroundImage: `url(${images[index]})` }}

        >


            <button className='btn prev' onClick={prev}></button>
            <button className='btn nxt' onClick={next}></button>

        </div>
    )
}

export default Hero
