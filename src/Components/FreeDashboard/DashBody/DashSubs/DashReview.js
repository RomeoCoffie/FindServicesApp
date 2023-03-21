import React, { Component } from 'react';
import '../../freedash.css';



class DashReviews extends Component {
    render() {
        return ( 
            <div className = "dashreviews" >
                <h3>Reviews</h3>
                <div className="rev">
                    <div className="revnotice">
                        <h1>Due to high spam rates, all reviews are reviewed and confirmed <br/> by our team. Self-written reviews are immediately removed.</h1>
                    </div><br/>
                    <div className="reviewstats">
                        <div className="rates">
                            <h1>&spades; &spades; &spades; &spades; &spades;</h1>   
                            <span>5.0</span><br/>
                            <label htmlFor="ratetext">Rating</label>
                        </div>
                        <div className="revs">
                            <h1>Total Reviews</h1>
                            <span>300</span><br/>
                            <label htmlFor="revnum">Reviews</label>
                        </div>
                    </div>
                    <div className="reviewcard dashaccinput">
                        <h1>&spades; &spades; &spades; &spades; &spades;
                        <h2>5.0</h2></h1>
                        <div className="dashaccinput">
                            <img src="" alt=""/>
                            <label htmlFor="revname">Name:</label><span>Romero Altatara</span>
                        </div><br/>
                        <div className="dashaccinput">
                            <label htmlFor="revtitle">Review Title</label><span>You are the best</span><br/>
                            <textarea name="revtext" id="" cols="30" rows="10"></textarea><br/>
                        </div>
                        
                        <button>Reply</button>
                        <span><textarea name="" id="" cols="30" rows="10"></textarea></span><br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashReviews;