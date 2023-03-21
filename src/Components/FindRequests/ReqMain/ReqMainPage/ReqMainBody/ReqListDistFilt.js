/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../ReqMain.css';


class ReqListDist extends Component {
    render() {
        return (
            <div class='MainCats'>
                <h1>Filter by Distance from You</h1>
                <div>
                    <ul>
                        <li><input type='radio' name='distance' value='5miles'/><label>Within 5 Miles from YOU</label></li>
                        <li><input type='radio' name='distance' value='20miles'/><label>Within 20 Miles from YOU</label></li>
                        <li><input type='radio' name='distance' value='50miles'/><label>Within 50 Miles from YOU</label></li>
                        <li><input type='radio' name='distance' value='50+miles'/><label>Anywhere in this country</label></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ReqListDist;