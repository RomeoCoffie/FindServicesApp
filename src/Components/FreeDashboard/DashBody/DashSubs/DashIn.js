import React, { Component } from 'react';
import '../../freedash.css';
import DashInboxs from './DashInboxs';



class DashInbox extends Component {
    render() {
        return ( 
            <div className = "dashinbox" >
                <h3>Inbox</h3>
                <div className="reviewstats">
                    <div className="rates">
                        <span>54000</span><br/>
                        <label htmlFor="ratetext">Unread Messages</label>
                    </div>
                    <div className="revs">
                        <span>300000</span><br/>
                        <label htmlFor="revnum">Total Messages</label>
                    </div>
                </div>
                <div className="reviewcard">
                    <div>
                        <img src="" alt=""/>
                        <label htmlFor="revname">Name:</label><span>Romero Altatara</span>
                    </div><br/>
                    <span>October 16, 2019 <span>10:45am</span></span><br/>
                    <span>Email</span><br/>
                    <textarea name="revtext" id="" cols="30" rows="10"></textarea><br/>
                    <button>Reply</button>
                    <button>Delete</button>
                </div>
                <div>
                    <DashInboxs />
                </div>
            </div>
        );
    }
}

export default DashInbox;