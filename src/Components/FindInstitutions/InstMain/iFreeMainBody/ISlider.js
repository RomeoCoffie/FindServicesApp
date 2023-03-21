import React, { Component } from 'react';

import IMenu from './IMenu.js';
import '../FindFree.css';
import IFindSearch from './IFindSearch';
import IFindPopular from './IFindPopular';



class ISlider extends Component {
    render() {
        return (
            <div className='slide'> 
                <IMenu />
                <IFindSearch />
                <IFindPopular />
            </div>
        );
    }
}

export default ISlider;