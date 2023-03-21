import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FindFree from '../FindServices-Page/FreeMain/FindFree';



const Tab1 = () => {
    return (
        <div className='cardcontainer'>
            <div className='card'>
                <div className="card__side1a">
                    <Link to="/Freelance" className='link'>
                        <h2 className='find'>find</h2>
                        <h2 className='txt1'>Freelancers <br/> & <br/> Handymen</h2>
                    </Link>
                </div>
                <div className="card__side2a">
                    <Link to="/Freelance" className='link' id="txt1">
                        <p className="back">Find real individuals who have skill you need.</p>
                        <Link to="/Freelance" className="findbtn">findServices</Link>
                    </Link>
                </div> 
                <Routes>
                    <Route className='backclear' path="/Freelance" exact component={FindFree} />
                </Routes>    
            </div>
        </div>
    )
}

export default Tab1;