import React, { Component } from 'react';
import '../../freedash.css';
import notpic from '../../../../Image-Files/han.png';
import DashNoticePage from './DashNoticePage';


class DashNotice extends Component {
    render() {
        return ( 
            <div className = "dashnotice" >
                <h3>Public Notice</h3>
                <div className="dashnop">
                    <div>
                        <ul>
                            <li>
                                <div className='notimage'>
                                    <img src={notpic} alt=""/>
                                </div>
                                <div className='nottext'>
                                    <div className='dashaccinput'>
                                        <label htmlFor="Notice Title">Title</label>
                                        <textarea cols="30" rows="2">This is the day that the Lord has made</textarea>
                                    </div><br/>
                                    <div className='dashaccinput'>
                                        <label htmlFor="Target">Target</label>
                                        <textarea cols="30" rows="2">All New Chritians</textarea>
                                    </div><br/>
                                    <div className='dashaccinput'>
                                        <label htmlFor="Summary">Summary</label>
                                        <textarea cols="30" rows="4">This is the day that the Lord has made and this is the day that the Lord has made</textarea>
                                    </div><br/>
                                    <div className='dashaccinput'>
                                        <label htmlFor="Date Posted">Date Posted</label>
                                        <textarea cols="30" rows="2">22nd June, 2019</textarea>
                                    </div><br/><br/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button>Add Notice</button>
                    <div>
                        <DashNoticePage />
                    </div>
                </div>    
            </div>
        );
    }
}

export default DashNotice;