import React from 'react';
import './HowTo.css';
import pin from '../../../../Image-Files/pin.png';


const IHow = () => {
    return ( 
        <div className="howto">
            <h2>How to go about it</h2>
            <div className="container">
                <div className="lines">
                    <h1>
                        <img src={pin} alt="" className="pin"/> Use the search bar to find the skills you need. You can also start by choosing the category relevant to your need. The category zooms in on specific groups with similar skillsets.
                    </h1> <br/>
                    <h1>
                        <img src={pin} alt=""/> Use the filter options to find freelancers who meet your criteria. Find the contact of the freelancer and get in-touch. We do our best to make sure that your enquiries reach them quickly.</h1>
                    <h1> <br/>
                        <img src={pin} alt=""/> Be sure to establish common grounds for timelines and terms and conditions of the job before giving the go ahead. FindServices encourages you to pay in installments until the job is done to your utmost
                        satisfaction.
                    </h1> <br/>
                    <a href="dextsolutions.com" className="read">Read Guidelines...</a>
                </div>
                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/79DijItQXMM" title='Video' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}
export default IHow;