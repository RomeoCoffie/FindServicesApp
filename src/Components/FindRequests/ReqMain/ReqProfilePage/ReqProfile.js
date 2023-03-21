/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';

import './profile.css';
import ProHero from './ProfileBody/ProHero';
import ProDetail from './ProfileBody/ProDetail';
import ProMap from './ProfileBody/ProMap';
import ProInteract from './ProfileBody/Prointeract';
import OtherPros from './ProfileBody/OtherPros';
import SimPro from './ProfileBody/SimPro';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';


class ProfilePage extends Component {
    render() {
        return (
            // <BrowserRouter>
                <div>
                    <Header />
                    <ProHero />
                    <ProDetail />
                    <ProMap />
                    <ProInteract />
                    <OtherPros />
                    <SimPro />
                    <Footer />
                </div>
            // </BrowserRouter>
        );
    }
}

export default ProfilePage;