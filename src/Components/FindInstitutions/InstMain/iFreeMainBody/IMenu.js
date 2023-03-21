import React from 'react';
import '../FindFree.css';
import { Link, Route, Routes } from 'react-router-dom';
import ICategoriesPage from '../FindInst';





const IMenu = () => {
    return ( 
        <div className=''>
            <div className="menuitems">
                <Link to="/Institutions/CategoriesPage" className="item1">Categories</Link>
                <Link to="/Institutions/IListingPage" className="item1">Listings</Link>
                <button href="#" className="item1">How it Works</button>
                <button href="#" className="item1">Find Jobs</button>
                <button href="#" className="item1">Contact Us</button>
            </div>
            <Routes>
                <Route path="/Institutions/CategoriesPage" exact element={<ICategoriesPage/>} />
            </Routes>
        </div>
    );
}

export default IMenu;