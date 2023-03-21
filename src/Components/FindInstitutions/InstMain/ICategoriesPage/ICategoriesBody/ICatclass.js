import React, { Component } from 'react';
import '../Categories.css';
import ICatcard from './ICatcard';


class ICatclass extends Component {
    render() {
        return (
            <div className='catsubs'>
                <h1 className='subcathd'>Sub-Categories</h1>
                <div className='catcards'>
                    <ICatcard />
                    <ICatcard />
                    <ICatcard />
                    <ICatcard />
                    <ICatcard />
                    <ICatcard />
                </div>
                
            </div>
        );
    }
}

export default ICatclass;