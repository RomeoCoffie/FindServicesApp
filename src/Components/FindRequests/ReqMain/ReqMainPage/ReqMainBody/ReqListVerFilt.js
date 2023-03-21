/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../ReqMain.css';


class ReqListVerified extends Component {
    render() {
        return (
            <div class='MainCats'>
                <h1>Filter by Verification</h1>
                <ul>
                    <li><a href='/' class='catfiltbody'>Only Verified Users</a></li>
                    <li><a href='/' class='catfiltbody'>Non Verified Users</a></li>
                </ul>
            </div>
        );
    }
}

export default ReqListVerified;