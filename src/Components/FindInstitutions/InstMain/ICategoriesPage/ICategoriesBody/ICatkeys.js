/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../Categories.css';
import ICatKey from './ICatKey';


class ICatkeys extends Component{
    render() {
        return (
            <div className="keywords">
                <h3 className="keys">KEYWORDS</h3>
                <ICatKey />
            </div>
        );
    }
}

export default ICatkeys;