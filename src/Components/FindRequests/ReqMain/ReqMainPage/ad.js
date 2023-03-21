import React, { Component } from 'react';
import './Ads.css';
import { Link } from 'react-router-dom';


import propic from '../../../../Image-Files/han.png';


class Ad extends Component {
    render() {
        return (
            <div>
                <Link to="/Freelance/ProfilePage" className='Ad'>
                    <img src={propic} alt=""/>
                    <h2>Romeo Coffie</h2>
                    <h2>Software Designer</h2>
                    <h2>&spades; &spades; &spades; &spades; &spades;</h2>
                </Link>
            </div>   

        );
    }
}

export default Ad;