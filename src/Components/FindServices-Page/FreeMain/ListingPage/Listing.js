/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import './listing.css';
import ListingTopBar from './ListingBody/ListTopbar';
import ListingBody from './ListingBody/ListingBody';
import Header from '../../../Header/Header';


class ListingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <ListingTopBar />
                <ListingBody />
            </div>
        );
    }
}

export default ListingPage;