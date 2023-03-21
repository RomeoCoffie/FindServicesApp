import React, { Component } from 'react';
import './Testimony.css';
import Tests from './Testimonies';
import News from './News';


class TestimonyArea extends Component {
    render() {
        return (
            <div className='testimony'>
                <div className='testcontainer'>
                    <Tests />
                    <News />
                </div>
                
            </div>
        );
    }
}

export default TestimonyArea;