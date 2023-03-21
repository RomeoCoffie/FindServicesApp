/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../profile.css';


class ProMapMap extends Component {
    render() {
        return (
            <div className='promapmap'>
                <h1>MY LOCATION: <span>Aburi Mountains, Aburi</span></h1>
                <div>
                    <link rel="import" href="component.html"/>
                </div>
            </div>
        );
    }
}

export default ProMapMap;