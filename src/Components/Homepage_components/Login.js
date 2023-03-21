import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { logOutUser } from '../Log-Pages/logSlice'



const Login = (props) => {
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
        logOrOther=<button  onClick={props.dent1} className="whitetext loginbtnn">Register or LogIn</button>
    } else if (userDetails !== null){
    logOrOther = <select id='dashhdselect' name='gotopage' className='findlogin' onChange={(e)=> outNavigate(e)}>
                        <option value='mainpage' >Go To Main Page</option>
                        <option value='dashboard' >Go To DashBoard</option>
                        <option value='logout'>Log Out</option>
                    </select>
    }
    return ( 
        <div>
            {logOrOther}
        </div>
    );
}

export default Login;