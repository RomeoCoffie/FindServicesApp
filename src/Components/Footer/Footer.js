import React, { Component } from 'react';
import './footer.css';



class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footcontainer">
                    <div className="foot1">
                        <h1 className="foottext">Your Account</h1>
                        <br/>
                        <a href="/" className="footlink">Register</a> <br/>
                        <a href="/" className="footlink">LogIn</a> <br/>
                        <a href="categories.html" className="footlink">Categoreis</a>
                    </div>

                    <div className="foot2">
                        <h1>Find Us</h1> <br/>
                        <a href="https://goo.gl/maps/WjTPTQDDyaC2" className="footlink" target="_blank" rel="noopener noreferrer">On Google Map</a>
                    </div>

                    <div className="foot3">
                        <h1>Contact Us</h1> <br/>
                        <a href="/" className="footlink">Phone Numbers</a><br/>
                        <a href="/" className="footlink">Fax Numbers</a><br/>
                        <a href="/" className="footlink">Emails</a><br/>
                    </div>

                    <div className="foot4">
                        <h1>General</h1> <br/>
                        <a href="/" className="footlink">Report a Service</a><br/>
                        <a href="/" className="footlink">Make a Suggestion</a><br/>
                        <a href="/" className="footlink">Find Jobs</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;