/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../IListing.css';


class IFilterCats extends Component {
    render() {
        return (
            <div className='MainCats'>
                <h1>Filter by Categories</h1>
                <ul>
                    <li><a href='/' className='catfiltbody'>Agriculture, Forestry & Fishing</a></li>
                    <li><a href='/' className='catfiltbody'>Mining</a></li>
                    <li><a href='/' className='catfiltbody'>Manufacturing</a></li>
                    <li><a href='/' className='catfiltbody'>Electricity, Gas, Water, Waste</a></li>
                    <li><a href='/' className='catfiltbody'>Construction & Tradesman</a></li>
                    <li><a href='/' className='catfiltbody'>Wholesale & Retail Trade</a></li>
                    <li><a href='/' className='catfiltbody'>Transport, Postal & Warehousing</a></li>
                    <li><a href='/' className='catfiltbody'>Accomodation & Food Services</a></li>
                    <li><a href='/' className='catfiltbody'>Information Media & Telecommunication</a></li>
                    <li><a href='/' className='catfiltbody'>Finance & Insurance Services</a></li>
                    <li><a href='/' className='catfiltbody'>Rental, Hiring & Real Estate</a></li>
                    <li><a href='/' className='catfiltbody'>Professional, Scientific & Technical</a></li>
                    <li><a href='/' className='catfiltbody'>Administrative & Support</a></li>
                    <li><a href='/' className='catfiltbody'>Public Administration & Safety</a></li>
                    <li><a href='/' className='catfiltbody'>Education & Training</a></li>
                    <li><a href='/' className='catfiltbody'>Healthcare & Social Assistance</a></li>
                    <li><a href='/' className='catfiltbody'>Arts & Recreational Services</a></li>
                    <li><a href='/' className='catfiltbody'>Other Services</a></li>
                </ul>
            </div>
        );
    }
}

export default IFilterCats;