/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../profile.css';



class ProMessage extends Component {
    render() {
        return (
            <div className='promes'> 
                <h2>Send an Email Enquiry to PERSON NAME</h2>
                <ul>
                    <li>You must not post job enquiries, CVs,, sales or promotional offers via this form.</li>
                    <li>Companies have the ability to report non-genuine enquiries which can result in you bein banned from the site</li>
                </ul>
                <form action="" method="post">
                    <input type="text" placeholder="Your Name" required/> <br/>
                    <input type="tel" name="Telephone" id="" placeholder="Your Phone Number"/> <br/>
                    <input type="email" name="Email Address" id="" placeholder="Your Email Address" required/> <br/>
                    <input type="text" className='msg' placeholder='Type your message here. Please be official'/>
                    <br/>
                    <input type="checkbox" name="CapThcha" id=""/> <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default ProMessage;