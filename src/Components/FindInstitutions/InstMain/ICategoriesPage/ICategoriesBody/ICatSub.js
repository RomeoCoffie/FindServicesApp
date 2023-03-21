import React, { Component } from 'react';
import '../Categories.css';
import ICatMenu from './ICatMenu';
import ICatfilters from './ICatfilters';
import ICatclass from './ICatclass';
import ICatkeys from './ICatkeys';


class ICatSub extends Component {
    render() {
        return (
            <div>
                <ICatMenu />
                <div className='catcont'>
                   <ICatfilters />
                   <ICatclass />
                   <ICatkeys />
                </div>
                
            </div>
        );
    }
}

export default ICatSub;