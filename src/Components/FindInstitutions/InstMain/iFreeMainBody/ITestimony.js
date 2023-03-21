import React, { Component } from 'react';
import './Testimony.css';
import ITests from './ITestimonies';
import INews from './INews';


class ITestimonyArea extends Component {
    render() {
        return (
            <div className='testimony'>
                <div className='testcontainer'>
                    <ITests />
                    <INews />
                </div>
                
            </div>
        );
    }
}

export default ITestimonyArea;