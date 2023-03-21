import React, { Component } from 'react';
import '../../freedash.css';
import podicon from '../../../../Image-Files/han.png';
import podpic from '../../../../Image-Files/image1.jpg';


class DashOverview extends Component {
    render() {
        return ( 
            <div>
                <h3 className='overhd'>Overview</h3>
                <div className='dashoverview'>
                    <div className = "dashoversum" >
                        <div className='overpods'>
                            <div className='propod pod1'>
                                <div>
                                    <img src={podicon} alt=""/>
                                </div>
                                <div>
                                    <h1>3</h1>
                                    <h2>Services</h2>
                                </div>
                            </div>
                            <div className='propod pod2'>
                                <div>
                                    <img src={podicon} alt=""/>
                                </div>
                                <div>
                                    <h1>3</h1>
                                    <h2>Services</h2>
                                </div>
                            </div>
                            <div className='propod pod3'>
                                <div>
                                    <img src={podicon} alt=""/>
                                </div>
                                <div>
                                    <h1>3</h1>
                                    <h2>Services</h2>
                                </div>
                            </div>
                            <div className='propod pod4'>
                                <div>
                                    <img src={podicon} alt=""/>
                                </div>
                                <div>
                                    <h1>3</h1>
                                    <h2>Services</h2>
                                </div>
                            </div>
                            <div className='propod pod5'>
                                <div>
                                    <img src={podicon} alt=""/>
                                </div>
                                <div>
                                    <h1>3</h1>
                                    <h2>Services</h2>
                                </div>
                            </div>


                        </div>
                        <div className='overstats'>
                            <h1>Overall Page View Trends</h1>

                        </div>
                        <div className='overtodo'>
                            <h1>TODOs</h1>
                            <ul>
                                <li>Profile Details</li>
                                <li>Verification</li>
                                <li>Contacts</li>
                                <li>Location (Map)</li>
                                <li>Photos</li>
                                <li>List of Services</li>
                                <li>Reviews</li>
                                <li>Keywords</li>
                                <li>Page Shares</li>
                            </ul>
                        </div>
                    </div>
                    <div className='dashoverpro'>
                        <div className='dashpropic'>
                            <img src={podpic} alt=""/>
                        </div>
                        <div className='dashprotext'>
                            <label htmlFor="podname">Name:</label><span>NAME</span>
                            <label htmlFor="podtitle">Title:</label><span>TITLE</span>
                            <label htmlFor="podcontacts">Contacts:</label><span>CONTACTS</span>
                        </div>
                        <div className='dashproabout'>
                            <label htmlFor="podabout">About:</label><span>ABOUT</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashOverview;