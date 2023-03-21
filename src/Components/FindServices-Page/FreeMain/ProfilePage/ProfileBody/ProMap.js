/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../profile.css';
import ProMapDetail from './ProMapDetail';
import ProMapMap from './ProMapMap';


class ProMap extends Component {
    render() {
        return (
            <div className='promap'>
                <ProMapDetail />
                <ProMapMap />
            </div>
        );
    }
}

export default ProMap;