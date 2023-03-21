/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../profile.css';



class ProReview extends Component {
    render() {
        return (
            <div id='rev' className='prorev'>
                <h2>Thanks for taking the time to write a review for COMPANY NAME. Tell your story. Your review will help other people to make a more informed choice in future. All reviews are checked and may be edited by our editorial team.</h2>
                <h2>Your Overall Rating</h2>
                <h1>&spades; &spades; &spades; &spades; &spades;</h1>
                <form action="" method="post">
                    <input type="text" placeholder='Title of Review' required/>
                    <input type="text" className="msg" placeholder='Briefly summarize the work that was carried out or the services provided. Add your comments to justify your rating above'/>
                    <h3>Review Photo (Upload a photo to help illustrate your review</h3>
                    <input type="file" name="" id=""/>
                    <input type="text" placeholder='Your Name' required/>
                    <input type="email" name="" placeholder='Your email address' id=""/>
                    <input type="checkbox" name="" id=""/>
                    <input type="submit" value="Submit Your Review"/>
                </form>

            </div>
        );
    }
}

export default ProReview;