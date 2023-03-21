/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import { Route, Link, Routes } from 'react-router-dom';

import '../profile.css';
import ProMessage from './Promessage';
import ProQuest from './Proquestion';
import ProReview from './Proreview';


class ProInteract extends Component {
    render() {
        return (
            <div className='proint'>
                <section>
                    <Link to="/Freelance/ProfilePage/mess">Send a Message</Link>
                    <Link to="/Freelance/ProfilePage/rev">Write a Review</Link>
                    <Link to="/Freelance/ProfilePage/quest">Post a Question</Link>
                </section>
                <Routes>
                    <Route path="/Freelance/ProfilePage/mess" exact element={<ProMessage/>} />
                    <Route path="/Freelance/ProfilePage/rev" exact element={<ProReview/>} />
                    <Route path="/Freelance/ProfilePage/quest" exact element={<ProQuest/>} />
                </Routes>
                {/* <ProMessage />
                <ProReview />
                <ProQuest /> */}
            </div>
            
        );
    }
}

export default ProInteract;