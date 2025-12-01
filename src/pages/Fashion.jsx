import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ProductCard from '../Components/ProductCard/ProductCard'
import Footer from '../Components/Footer/Footer'

import jackets from '../assets/Puma.png'
import sweaters from '../assets/Sweater.png'
import tracksuits from '../assets/Tracksuit.png'
import socks from '../assets/Socks.png'


import projector from '../assets/Projector.png'
import monitor from '../assets/Monitors.png'
import speaker from '../assets/Speaker.png'
import Camera from '../assets/Camera.png'
import Watch from '../assets/Watch.png'
import earbuds from '../assets/earbuds.png'
import printer from '../assets/printer.png'

import './Category.css'

const Fashion = () => {
    return (
        <div>

            <Navbar />

            <h2 className="category-title">Top picks of the sale</h2>

            <div className='category-grid'>

                <ProductCard img={jackets} title="Men's Jackets" offer="Min. 50% Off" />
                <ProductCard img={sweaters} title="Men's Sweatshirts" offer="Min. 50% Off" />
                <ProductCard img={tracksuits} title="Men's Tracksuits" offer="Min. 50% Off" />
                <ProductCard img={socks} title="Men's And Women's Socks" offer="Min. 50% Off" />

                <ProductCard img={projector} title="Men's Jackets" offer="Min. 50% off" />
                <ProductCard img={monitor} title="Men's Sweatshirts" offer="Min. 50% off" />
                <ProductCard img={speaker} title="Men's Jackets" offer="Min. 50% off" />
                <ProductCard img={Camera} title="Men's Jackets" offer="Min. 50% off" />

                <ProductCard img={Watch} title="Men's Jackets" offer="Min. 50% off" />
                <ProductCard img={earbuds} title="Men's Jackets" offer="Min. 50% off" />
                <ProductCard img={printer} title="Men's Jackets" offer="Min. 50% off" />

            </div>

            <Footer />

        </div>
    )
}

export default Fashion
