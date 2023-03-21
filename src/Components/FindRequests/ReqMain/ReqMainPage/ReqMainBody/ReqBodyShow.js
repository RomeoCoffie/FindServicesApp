/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../ReqMain.css';
import ReqProTab from './ReqProTab';

class ReqBodyShow extends Component {
    render() {
        return (
            <div class='Bodyshow'>
                <ReqProTab />
                <ReqProTab />
                <ReqProTab />
                <ReqProTab />
                <ReqProTab />
                <ReqProTab />
                <ReqProTab />
                <ReqProTab />
                <ReqProTab />
            </div>
        );
    }
}

export default ReqBodyShow;