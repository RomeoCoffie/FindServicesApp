/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import './IListing.css';
import IListingTopBar from './IListingBody/IListTopbar';
import IListingBody from './IListingBody/IListingBody';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';


class IListingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <IListingTopBar />
                <IListingBody />
                <Footer />
            </div>
        );
    }
}

export default IListingPage;