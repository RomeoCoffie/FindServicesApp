/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './log.css';
import Logo from '../../Image-Files/logo.png';




const RegisterPage = () => {
    return ( 
        <form action="" method="post" className='regform'>
            <div >
                <img src={Logo} alt="FINDSERVICES" className='flogo'/>
            </div>
            <h2>Truthful details make your page more trustworthy</h2><br/>
            <input type="text" placeholder="First Name" className='Rbx'/>
            <input type="text" placeholder="Last Name" className='Rbx'/><br/>
            <input type="text" placeholder="Other Name(s)" className='Rbx'/><br/>
            <input type="text" placeholder="Username" className='Rbx'/><br/>
            <label className='dob'>Date of Birth</label><input type="date" className='Rbx'/><br/>
            <input type="email" placeholder="Email address" className='Rbx'/><br/>
            <input type="tel" placeholder="Phone Number" className='Rbx'/><br/>
            <input type="password" placeholder="Password" className='Rbx'/>
            <input type="password" placeholder="Confirm Password" className='Rbx'/><br/>
            <input type="submit" value="Register" className='logbtn'/>
            <div className="easy">
                <h1 className='sign1'>Register By</h1>
                <button className='logbtn1'>Facebook</button>
                <button className='logbtn1'>Twitter</button>
                <button className='logbtn1'>Google</button>
            </div>
            <div className='reg'>Already have an account? Login <a href='index.html'>HERE</a> </div>
        </form>
            
    );
}

export default RegisterPage;