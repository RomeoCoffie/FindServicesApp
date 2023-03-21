/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../IListing.css';


class IListVerified extends Component {
    render() {
        return (
            <div className='MainCats'>
                <h1>Filter by Verification</h1>
                <ul>
                    <li><a href='/' className='catfiltbody'>Only Verified Users</a></li>
                    <li><a href='/' className='catfiltbody'>Non Verified Users</a></li>
                </ul>
            </div>
        );
    }
}

export default IListVerified;