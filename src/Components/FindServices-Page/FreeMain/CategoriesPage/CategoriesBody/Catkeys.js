/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../Categories.css';
import CatKey from './CatKey';


class Catkeys extends Component{
    render() {
        return (
            <div className="keywords">
                <h3 className="keys">KEYWORDS</h3>
                <CatKey />
            </div>
        );
    }
}

export default Catkeys;