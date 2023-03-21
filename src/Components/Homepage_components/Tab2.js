import React from 'react';
import { Link } from 'react-router-dom';


const Tab2 = () => {
    return (
        <div className='cardcontainer'>
            <div className="card">
                <div className="card__side1b">
                    <Link to="/Institutions" className='link'>
                        <h2 className='find'>find</h2>
                        <h2 className='txt1'>Companies <br/> & <br/> Organizations</h2>
                    </Link>    
                </div>
                <div className="card__side2b">
                    <Link to="/Institutions" className='link' id="txt1">
                        <p className="back">Find real registered and certified institutions</p>
                        <Link to="/Freelance" className="findbtn">findServices</Link>
                    </Link>            
                </div>
            </div>
        </div>
    )
}

export default Tab2;