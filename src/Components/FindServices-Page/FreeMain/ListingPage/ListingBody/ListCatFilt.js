/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../listing.css';


class FilterCats extends Component {
    render() {
        return (
            <div className='MainCats'>
                <h1>Filter by Categories</h1>
                <ul>
                    <li><a href='/' className='catfiltbody'>HandyWork Home & Office</a></li>
                    <li><a href='/' className='catfiltbody'>Artisans and Craftsman</a></li>
                    <li><a href='/' className='catfiltbody'>Business & Assistance</a></li>
                    <li><a href='/' className='catfiltbody'>Writing & Translation</a></li>
                    <li><a href='/' className='catfiltbody'>Designs & Audio/Visuals</a></li>
                    <li><a href='/' className='catfiltbody'>Programming & Tech</a></li>
                    <li><a href='/' className='catfiltbody'>Education & Training</a></li>
                    <li><a href='/' className='catfiltbody'>Lifestyle & Sports</a></li>
                </ul>
            </div>
        );
    }
}

export default FilterCats;