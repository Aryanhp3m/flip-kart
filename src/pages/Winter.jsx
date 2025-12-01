import React from 'react'
import './Home.css'
import './Winter.css'
// import Footer from '../Components/Footer/Footer'

import Navbar from '../Components/Navbar/Navbar'
import ProductCard from '../Components/ProductCard/ProductCard'
import Footer from '../Components/Footer/Footer'
import jackets from '../assets/Puma.png'
import sweaters from '../assets/Sweater.png'
import tracksuits from '../assets/Tracksuit.png'
import socks from '../assets/Socks.png'
import womens_jacket from '../assets/womensJacket.png'
import hoodie from '../assets/Hoodie.png'
import gloves from '../assets/Gloves.png'
import caps from '../assets/Caps.png'
import thermalset from '../assets/Thermalset.png'
import warmfleece from '../assets/Warmfleece.png'
import furJacket from '../assets/FurJacket.png'
import mufflers from '../assets/Mufflers.png'








// import Footer from '../Components/Footer/Footer'

const Winter = () => {
    return (

        <div>
            <Navbar />


            <h2 className='winter-title'>Winter Essentials for You</h2>

            <div className='winter-grid'>
                <ProductCard img={jackets} title="Men's Jackets" offer="Min. 50% Off" />
                <ProductCard img={sweaters} title="Men's Sweatshirts" offer="Min. 50% Off" />
                <ProductCard img={tracksuits} title="Men's Tracksuits" offer="Min. 50% Off" />
                <ProductCard img={womens_jacket} title="Women's Jacket" offer="Min. 50% Off" />
                <ProductCard img={hoodie} title="Men's Hoodie" offer="Min. 50% Off" />
                <ProductCard img={gloves} title="Men's And Women's Gloves" offer="Min. 50% Off" />
                <ProductCard img={caps} title="Men's And Women's Caps" offer="Min. 50% Off" />
                <ProductCard img={thermalset} title="Men's Thermal Set" offer="Min. 50% Off" />
                <ProductCard img={warmfleece} title="Kids Warmfleece" offer="Min. 50% Off" />
                <ProductCard img={furJacket} title="Women's Fur Jacket" offer="Min. 50% Off" />
                <ProductCard img={mufflers} title="Men's And Women's Mufflers" offer="Min. 50% Off" />
                <ProductCard img={socks} title="Men's And Women's Socks" offer="Min. 50% Off" />




            </div>

            <Footer />


        </div>


    )
}

export default Winter
