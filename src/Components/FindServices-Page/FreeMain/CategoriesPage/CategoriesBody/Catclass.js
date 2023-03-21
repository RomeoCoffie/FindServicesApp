import React, { Component } from 'react';
import '../Categories.css';
import Catcard from './Catcard';


class Catclass extends Component {
    render() {
        return (
            <div className='catsubs'>
                <h1 className='subcathd'>Sub-Categories</h1>
                <div className='catcards'>
                    <Catcard />
                    <Catcard />
                    <Catcard />
                    <Catcard />
                    <Catcard />
                    <Catcard />
                </div>
                
            </div>
        );
    }
}

export default Catclass;