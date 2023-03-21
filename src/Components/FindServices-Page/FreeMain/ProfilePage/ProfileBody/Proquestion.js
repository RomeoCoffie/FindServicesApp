/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../profile.css';



class ProQuest extends Component {
    render() {
        return (
            <div id='quest' className='proquest'>
                <h2>Ask Questions, Get Answers</h2>
                <h2>Remember! Your quetions/answer will be visible to the public. Do not post sensitive information</h2>
                <form action="" method="post">
                    <input type="text" placeholder='Your Name' required/>
                    <input type="email" name="" placeholder='Your email address' id=""/>
                    <input type="text" className="msg" placeholder='Briefly summarize the work that was carried out or the services provided. Add your comments to justify your rating above'/>
                    <input type="checkbox" name=""/>
                    <input type="submit" value="Submit Your Question"/>
                </form>

            </div>
        );
    }
}

export default ProQuest;