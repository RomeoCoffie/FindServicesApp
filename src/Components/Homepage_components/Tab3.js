import React from 'react';
import { Link } from 'react-router-dom';


const Tab3 = () => {
    return (
        <div className='cardcontainer'>
            <div className="card">
                <div className="card__side1c">
                    <Link to="/Requests" className='link'>
                        <h2 className='find'>find</h2>
                        <h2 className='txt1'>Errands <br/> & <br/> Requests</h2>
                    </Link>
                </div>
                <div className="card__side2c">
                    <Link to="/Requests" className='link'>
                        <p className="back">Find general requests for help from general public.</p>
                        <Link to="/Requests" className="findbtn">findServices</Link>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Tab3;