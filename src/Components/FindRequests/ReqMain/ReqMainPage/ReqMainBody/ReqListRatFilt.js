/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../ReqMain.css';


class ReqListRating extends Component {
    render() {
        return (
            <div class='MainCats'>
                <h1>Filter by Ratings</h1>
                <div>
                    <ul>
                        <li><input type='radio' name='stars' value='5Star'/><label>&times; &times; &times; &times; &times;</label></li>
                        <li><input type='radio' name='stars' value='4Star'/><label>&times; &times; &times; &times;</label></li>
                        <li><input type='radio' name='stars' value='3Star'/><label>&times; &times; &times;</label></li>
                        <li><input type='radio' name='stars' value='2Star'/><label>&times; &times;</label></li>
                        <li><input type='radio' name='stars' value='1Star'/><label>&times;</label></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ReqListRating;