/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../profile.css';



class ProName extends Component {
    render() {
        return (
            <div className='proname'>
                <label htmlFor="ProNAME">Name:</label><span>Romeo Coffie Agbofah</span><br/>
                <label htmlFor="ProNAME">Title:</label><span>Website Developer</span><br/>
                <label htmlFor="ProNAME">I WILL:</label><span className='willstate'>Build a beautiful website that respectfully represents your business and make sure to establish your online campaign that can rake you alot of customers. I do a bery thorough job and my clients are very happy about what i do. You will not regret it. Because i do this best.</span>
                <button>Reveal Contact Details</button>
                <span className="procontactdt">
                    <label htmlFor="procontact">Telephone:</label><span>Romeo Coffie Agbofah</span><br/>
                    <label htmlFor="procontact">Mobile:</label><span>Romeo Coffie Agbofah</span><br/>
                    <label htmlFor="procontact">fax:</label><span>Romeo Coffie Agbofah</span><br/>
                    <label htmlFor="ProNAME">Website:</label><span>Romeo Coffie Agbofah</span><br/>
                </span>
            </div>    
        );
    }
}

export default ProName;