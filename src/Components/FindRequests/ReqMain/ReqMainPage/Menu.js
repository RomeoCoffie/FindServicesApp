import React from 'react';
import '../FindFree.css';
import { Link } from 'react-router-dom';




const Menu = () => {
    return ( 
        <div className=''>
            <div className="menuitems">
                <Link to="/Freelance/CategoriesPage" className="item1">Categories</Link>
                <Link to="/Freelance/ListingPage" className="item1">Listings</Link>
                <button href="#" className="item1">How it Works</button>
                <button href="#" className="item1">Find Jobs</button>
                <button href="#" className="item1">Contact Us</button>
            </div>
        </div>
    );
}

export default Menu;