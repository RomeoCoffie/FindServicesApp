import React, { Component } from 'react';
import '../../freedash.css';


class DashNoticePage extends Component {
    render() {
        return ( 
            <div className = "dashnoticepage" >
                <div>
                    <div className='dashaccinput'>
                        <label htmlFor="Notice Title">Title:</label>
                        <textarea>this is just the text</textarea>
                    </div><br/>
                    <div className='dashaccinput'>
                        <label htmlFor="Summary">Summary:</label>
                        <textarea>this is just the text</textarea>
                    </div><br/>
                    <div className='dashaccinput'>
                        <label htmlFor="Target">Target:</label>
                        <textarea>this is just the text</textarea>
                    </div><br/>
                    <div className='dashaccinput'>
                        <textarea name="notice" id="" cols="30" rows="10"></textarea>
                    </div><br/>
                </div>
                <button>Delete Notice</button>
            </div>
        );
    }
}

export default DashNoticePage;