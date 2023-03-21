/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import FindLogo from '../../Image-Files/logo.png';
import './findHeader.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logOutUser } from '../Log-Pages/logSlice'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux'




const Header = (props) => {
    const navigate=useNavigate();
    let { userDetails }=useSelector((state)=>state.logStatus)
    const auth = getAuth();
    const dispatch=useDispatch()

    const outNavigate=(e)=>{
        if(e.target.value==='dashboard'){
            navigate('/DashBoard')
        }else if(e.target.value==="mainpage"){
            navigate('/')
        }else if (e.target.value==='logout'){
            signOut(auth)
            dispatch(logOutUser)
            navigate('/')
            dispatch(logOutUser)

        }
    }
    let logOrOther;
    if(userDetails === null){
        logOrOther=<button className = 'findlogin' onClick={props.dent1}> Register or LogIn </button>
    } else if (userDetails !== null){
    logOrOther = <select id='dashhdselect' name='gotopage' className='findlogin' onChange={(e)=> outNavigate(e)}>
                        <option value='mainpage' >Go To Main Page</option>
                        <option value='dashboard' >Go To DashBoard</option>
                        <option value='logout'>Log Out</option>
                    </select>
    }
    return (
        <div className = 'findheader' >
            <Link to= "/" title = "Go to homepage" className = 'findlogo' >
                <img src = { FindLogo } alt = "FINDSERVICE" />
            </Link>
            <div className = 'findlogs' >
                {logOrOther}
                {/* onChange={(e)=>{ e.target.value==='dashboard' ? navigate('/DashBoard') : navigate('/')} } */}
                {/* {
                    !logState && <button className = 'findlogin' onClick={props.dent1}> Register or LogIn </button>
                }
                 */}
                
                {/* <button className = 'findlogout' onClick={props.dent2} > Register </button>  */}
            </div>
        </div>
    );
}

export default Header;