/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../ReqMain.css';


class ReqFilterCats extends Component {
    render() {
        return (
            <div class='MainCats'>
                <h1>Filter by Categories</h1>
                <ul>
                    <li><a href='/' class='catfiltbody'>HandyWork Home & Office</a></li>
                    <li><a href='/' class='catfiltbody'>Artisans and Craftsman</a></li>
                    <li><a href='/' class='catfiltbody'>Business & Assistance</a></li>
                    <li><a href='/' class='catfiltbody'>Writing & Translation</a></li>
                    <li><a href='/' class='catfiltbody'>Designs & Audio/Visuals</a></li>
                    <li><a href='/' class='catfiltbody'>Programming & Tech</a></li>
                    <li><a href='/' class='catfiltbody'>Education & Training</a></li>
                    <li><a href='/' class='catfiltbody'>Lifestyle & Sports</a></li>
                </ul>
            </div>
        );
    }
}

export default ReqFilterCats;