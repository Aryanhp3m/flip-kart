// import React from 'react'
// import React, { useRef } from 'react';
import React, { useRef, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'
import './Home.css'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Card from '../Components/Card/Card'
import CategoryBar from '../Components/CategoryBar/CategoryBar'

import projector from '../assets/Projector.png'
import monitor from '../assets/Monitors.png'
import speaker from '../assets/Speaker.png'
import Camera from '../assets/Camera.png'
import Watch from '../assets/Watch.png'
import earbuds from '../assets/earbuds.png'
import printer from '../assets/printer.png'

import flight from '../assets/flight.png'
import plane from '../assets/plane.png'
import mattress from '../assets/mattress.png'
import beds from '../assets/beds.png'
import chairs from '../assets/chairs.png'

import ProductCard from '../Components/ProductCard/ProductCard'

import jackets from '../assets/Puma.png'
import sweaters from '../assets/Sweater.png'
import tracksuits from '../assets/Tracksuit.png'
import socks from '../assets/Socks.png'

import indigo_ad from '../assets/Indigo_ad.png'

import Explore_flight from '../assets/Explore_flight_ad.png'

import Footer from '../Components/Footer/Footer'




const Home = () => {

    const navigate = useNavigate();

    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);


    useEffect(() => {
        const scrollEl = scrollRef.current;
        const checkScroll = () => {
            setShowLeft(scrollEl.scrollLeft > 0);
            setShowRight(scrollEl.scrollLeft < scrollEl.scrollWidth - scrollEl.clientWidth - 10);
        };

        scrollEl.addEventListener('scroll', checkScroll);
        checkScroll();

        return () => scrollEl.removeEventListener('scroll', checkScroll);
    }, []);


    return (
        <div>
            <Navbar />
            <CategoryBar />

            <Hero
                images={[flight, plane, mattress, beds, chairs]} />



            <div className="deal-section">

                {/* LEFT SIDE */}
                <div className="deal-left">

                    {/* Title */}
                    <h2 className="deal-heading">Top Deals</h2>  {/* Removed extra div */}

                    {/* Scroll Wrapper */}
                    <div className="deal-scroll-wrapper">

                        {/* Left Arrow */}
                        {showLeft && (
                            <button
                                className="scroll-btn scroll-left"
                                onClick={() => (scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 300)}
                            >
                                ❮
                            </button>
                        )}

                        {/* Scrollable Cards */}
                        <div className="deal-cards" ref={scrollRef}>
                            <Card img={projector} name="Projector" price="From ₹6990" />
                            <Card img={monitor} name="Monitor" price="From ₹5990" />
                            <Card img={speaker} name="Speaker" price="From ₹499" />
                            <Card img={Camera} name="Mirrorless Cameras" price="Shop Now!" />
                            <Card img={Watch} name="Smartwatches" price="From ₹1399" />
                            <Card img={earbuds} name="Headset" price="Grab Now" />
                            <Card img={printer} name="Printers" price="From ₹2336" />
                            <Card img={Camera} name="Mirrorless Cameras" price="Shop Now!" />
                            <Card img={Watch} name="Smartwatches" price="From ₹1399" />
                        </div>

                        {/* Right Arrow */}
                        {showRight && (
                            <button
                                className="scroll-btn scroll-right"
                                onClick={() => (scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 300)}
                            >
                                ❯
                            </button>
                        )}

                    </div>
                </div>

                {/* RIGHT SIDE - Ad */}
                <div className="deal-ad">
                    <img src={indigo_ad} alt="Offer" />
                </div>

            </div>















            {/* All big product sections wrapper */}
            <div className="product-sections-wrapper">

                {/* Section 1 */}
                <div className="product-section">
                    <div className='product-heading'>
                        <h2>Winter Essentials for You</h2>
                        <button onClick={() => navigate('/winter')} className='product-arrow'>➜</button>
                    </div>

                    <div className='product-container'>
                        <ProductCard img={jackets} title="Men's Jackets" offer="Most-loved" />
                        <ProductCard img={sweaters} title="Men's Sweatshirts" offer="Min. 50% Off" />
                        <ProductCard img={tracksuits} title="Men's Tracksuits" offer="Min. 50% Off" />
                        <ProductCard img={socks} title="Men's And Women's Socks" offer="Min. 50% Off" />

                    </div>
                </div>

                {/* Section 2 */}
                <div className="product-section">
                    <div className='product-heading'>
                        <h2>Top picks of the sale</h2>
                        <button onClick={() => navigate('/toppicks')} className='product-arrow'>➜</button>
                    </div>

                    <div className='product-container'>
                        <ProductCard img={projector} title="Projector" offer="Min. 50% Off" />
                        <ProductCard img={speaker} title="Speaker" offer="Min. 50% Off" />
                        <ProductCard img={earbuds} title="Earbuds" offer="Special offer" />
                        <ProductCard img={printer} title="Printers" offer="Min. 50% Off" />

                    </div>
                </div>

                {/* Section 3 */}
                <div className="product-section">
                    <div className='product-heading'>
                        <h2>Trending Now</h2>
                        <button onClick={() => navigate('/Fashion')} className='product-arrow'>➜</button>
                    </div>

                    <div className='product-container'>
                        <ProductCard img={Camera} title="Cameras" offer="Shop now" />
                        <ProductCard img={Watch} title="Smartwatches" offer="Min. 30% Off" />
                        <ProductCard img={monitor} title="Monitors" offer="Best-sellers" />
                        <ProductCard img={speaker} title="Speakers" offer="Min. 50% Off" />
                    </div>
                </div>

                {/* Section 4 */}
                {/* Section 4 → Corrected */}
                <div className="product-section-with-ads-container">

                    {/* LEFT — Product Section (inside border) */}
                    <div className="product-section">
                        <div className='product-heading'>
                            <h2>Best of Electronics</h2>
                            <button onClick={() => navigate('/electronics')} className='product-arrow'>➜</button>
                        </div>

                        <div className='product-grid-2x2'>
                            <ProductCard img={projector} title="Home Projector" offer="From ₹6990" />
                            <ProductCard img={earbuds} title="Wireless Earbuds" offer="Grab now" />
                            <ProductCard img={Watch} title="Smartwatches" offer="From ₹1399" />
                            <ProductCard img={printer} title="Printers" offer="From ₹2336" />
                        </div>
                    </div>

                    {/* RIGHT — Ad outside border */}
                    <div className="product-ad">
                        <img src={Explore_flight} alt="Explore Offers" />
                    </div>

                </div>










            </div>

            <Footer />


        </div>






    )
}

export default Home




