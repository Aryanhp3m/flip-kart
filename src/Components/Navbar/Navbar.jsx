import React from 'react';
import './Navbar.css';
import logo from '../../assets/Flipkart_Logo_1.png';
import { FaSearch, FaUserCircle, FaShoppingCart, FaEllipsisV } from 'react-icons/fa';
import { MdStorefront } from 'react-icons/md';

const Navbar = () => {
    return (
        <nav className="nav-bar">
            {/* Left Logo */}
            <div className="logo">
                <img src={logo} alt="Flipkart" className="logo-img" />
            </div>

            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for Products, Brands and More"
                />
                <button className="search-btn">
                    <FaSearch />
                </button>
            </div>

            {/* Right Menu */}
            <ul className="nav-links">
                <li>
                    <FaUserCircle /> Login
                </li>
                <li>
                    <FaShoppingCart /> Cart
                </li>
                <li>
                    <MdStorefront /> Become a Seller
                </li>
                <li>
                    <FaEllipsisV />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

