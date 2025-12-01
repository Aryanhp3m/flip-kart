import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ProductCard from '../Components/ProductCard/ProductCard'
import Footer from '../Components/Footer/Footer'

import './Category.css'



import makhana_bhujia from '../assets/Makhana_Bhujia.png'
import badminton from '../assets/Badminton.png'
import vehicles from '../assets/Vehicles.png'
import baby_bedding from '../assets/Babybeddingsets.png'
import adult_cycle from '../assets/Adultcycle.png'
import remote_control from '../assets/Remotecontroltoy.png'
import kitchen_essentials from '../assets/Kitchenessentials.png'
import laptop_bag from '../assets/LaptopBag.png'
import instruments from '../assets/Instruments.png'
import car_air from '../assets/Carair.png'
import car_woofer from '../assets/Car_woofer.png'
import car_media from '../assets/Car_media.png'

const Toppicks = () => {
    return (
        <div>

            <Navbar />


            <h2 className="category-title">Top picks of the sale</h2>

            <div className='category-grid'>

                <ProductCard img={makhana_bhujia} title="Makhana_Bhujia" offer="Min. 50% Off" />
                <ProductCard img={badminton} title="Badminton Kits" offer="Min. 50% Off" />
                <ProductCard img={vehicles} title="Vehicle Light Bulbs" offer="Min. 50% Off" />

                <ProductCard img={baby_bedding} title="Baby Bedding Sets" offer="Min. 50% off" />
                <ProductCard img={adult_cycle} title="Adult Cycles" offer="Min. 50% off" />
                <ProductCard img={remote_control} title="Remote Control Toys" offer="Min. 50% off" />
                <ProductCard img={kitchen_essentials} title="Kitchen Essentials" offer="Min. 50% off" />

                <ProductCard img={laptop_bag} title="Laptop Bags" offer="Min. 50% off" />
                <ProductCard img={instruments} title="Instruments" offer="Min. 50% off" />
                <ProductCard img={car_air} title="Car Air Freshner" offer="Min. 50% off" />
                <ProductCard img={car_woofer} title="Car Sub_woofers" offer="Min. 50% off" />
                <ProductCard img={car_media} title="Car Media Players" offer="Min. 50% off" />

            </div>

            <Footer />

        </div>
    )
}

export default Toppicks
