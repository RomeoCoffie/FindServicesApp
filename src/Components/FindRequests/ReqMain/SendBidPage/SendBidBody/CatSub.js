import React, { Component } from 'react';
import '../Categories.css';
import CatMenu from './CatMenu';
import Catfilters from './Catfilters';
import Catclass from './Catclass';
import Catkeys from './Catkeys';


class CatSub extends Component {
    render() {
        return (
            <div>
                <CatMenu />
                <div className='catcont'>
                   <Catfilters />
                   <Catclass />
                   <Catkeys />
                </div>
                
            </div>
        );
    }
}

export default CatSub;