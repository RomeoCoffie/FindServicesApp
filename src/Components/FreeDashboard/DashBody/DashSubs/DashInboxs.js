import React, { Component } from 'react';
import '../../freedash.css';



class DashInboxs extends Component {
    render() {
        return ( 
            <div className = "dashinbox" >
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
        );
    }
}

export default DashInboxs;