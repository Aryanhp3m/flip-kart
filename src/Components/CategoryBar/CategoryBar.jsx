import React from 'react'
import './CategoryBar.css'


import minutes from '../../assets/Minutes.png'
import mobiles_tab from '../../assets/Mobiles&Tab.png'
import tvs_appliances from '../../assets/TVs & Appliances.png'
import flight_bookings from '../../assets/FlightBookings.png'
import grocery from '../../assets/Grocery.png'
import electronics from '../../assets/Electronics_cat.png'
import furniture from '../../assets/Furniture.png'
import fashion_cat from '../../assets/Fashion_cat.png'
import teddy from '../../assets/Teddy.png'


const categories = [
    { img: minutes, label: "Minutes" },
    { img: mobiles_tab, label: "Mobiles & Tablets" },
    { img: tvs_appliances, label: "TVs & Appliances" },
    { img: flight_bookings, label: "Flight Bookings" },
    { img: grocery, label: "Grocery" },
    { img: electronics, label: "Electronics" },
    { img: furniture, label: "Home&Furniture" },
    { img: fashion_cat, label: "Fashion" },
    { img: teddy, label: "Beauty, Food.." },




]






const CategoryBar = () => {
    return (
        <div className='category-bar'>
            {categories.map((item, index) => (
                <div className='category-item' key={index}>
                    <img src={item.img} alt={item.label} className='category-img' />
                    <span className='category-label'>{item.label}</span>
                </div>
            ))}

        </div>
    )
}

export default CategoryBar
