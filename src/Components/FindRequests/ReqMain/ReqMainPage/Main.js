import React, { Component } from 'react';
import Slider from './Slider';
import '../FindFree.css';
import Categories from './Cat';
import How from './HowTo';


class Main extends Component {
    render() {
        return (
            <div  className='Main'>
                <Slider />
                <Categories />
                <How />
            </div>
        );
    }
}

export default Main;