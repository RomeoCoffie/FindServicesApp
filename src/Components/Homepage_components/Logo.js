import React from 'react';
import logo from '../../Image-Files/logo.png';
import { Link } from 'react-router-dom';


const FindService_logo = () => {
    return ( 
        <div className = "logo1" >
            <Link to="/" title = "Go to homepage" >
                <img src={logo} alt = "logo" />
            </Link>
        </div>
    );
}

export default FindService_logo;