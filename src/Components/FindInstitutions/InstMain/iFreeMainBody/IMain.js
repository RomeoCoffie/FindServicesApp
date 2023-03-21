import React, { Component } from 'react';
import ISlider from './ISlider';
import '../FindFree.css';
import ICategories from './ICat';
import IHow from './IHowTo';


class IMain extends Component {
    render() {
        return (
            <div  className='Main'>
                <ISlider />
                <ICategories />
                <IHow />
            </div>
        );
    }
}

export default IMain;