/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../listing.css';


class ListRange extends Component {
    render() {
        return (
            <div className='MainCats'>
                <h1>Filter by Price</h1>
                <div>
                    <ul>
                        <li><input type='radio' name='price-range' value='to10'/><label>Within $10</label></li>
                        <li><input type='radio' name='price-range' value='to30'/><label>Within $30</label></li>
                        <li><input type='radio' name='price-range' value='to50'/><label>Within $50</label></li>
                        <li><input type='radio' name='price-range' value='to100'/><label>100+</label></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListRange;