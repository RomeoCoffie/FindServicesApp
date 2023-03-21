/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../profile.css';
import SlideImage1 from '../../../../../Image-Files/image1.jpg';
import SlideImage2 from '../../../../../Image-Files/image2.jpg';
import SlideImage3 from '../../../../../Image-Files/images7.jpg';
import SlideImage4 from '../../../../../Image-Files/image10.jpg';



class ProHero extends Component {
    render() {
        return (
            <div>

                <div className='prohero'>
                    <img src={SlideImage1} alt=""/>
                    <img src={SlideImage2} alt=""/>
                    <img src={SlideImage3} alt=""/>
                    <img src={SlideImage4} alt=""/>
                </div>
            </div>
            
        );
    }
}

export default ProHero;