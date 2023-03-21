import React from 'react';
import './log.css';
import { useNavigate } from 'react-router-dom'
import Logo from '../../Image-Files/logo.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signOut } from "firebase/auth";
import App from '../../Firebase/firebase';
import { isValidPhoneNumber } from 'react-phone-number-input'
import { logInState, storeUserDetails, logOutUser } from './logSlice';
import { useSelector } from 'react-redux'
import { getFirestore, doc, setDoc } from "firebase/firestore";

const Loginhalf2 = (props) => {
    const navigate=useNavigate()
    const [value, setValue] = useState('')
    const auth=getAuth(App)
    const appVerifier = window.recaptchaVerifier;
    const [flag, setFlag]=useState(false)
    const [errBox1, seterrBox1]=useState('')
    const [errBox2, seterrBox2]=useState('')
    const inputRef=useRef()
    const dispatch=useDispatch()
    const { userDetails }=useSelector((state)=> state.logStatus)
    const db = getFirestore(App);


    
    const getOtp=(e)=>{
        e.preventDefault();
        if (value==="" || value===undefined || isValidPhoneNumber(value)=== false) {
            alert('Please select a country and enter a valid Phone Number');
        } else {
            setUpRecaptcha(value)
        }
    }
    const setUpRecaptcha=(value)=>{
        window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container', 
        {
            'size': 'normal',
            'callback': function(response) {
                setFlag(true)
            },
            'error-callback': function(error) {
                console.log('Error', error);
                seterrBox1('Please check your connection')
                
            },
            'expired-callback': function() {
                seterrBox1('Verification Expired');
            }
        }, 
        auth)
        window.recaptchaVerifier.render();
    }

    signInWithPhoneNumber(auth, value, appVerifier)
    .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
    }).catch((error) => {
    //   setFlag(false)
    });

    const verifyOtp=(e)=>{
        const otp=inputRef.current.value;
        let confirmationResult=window.confirmationResult;
        confirmationResult.confirm(otp).then((result) => {
            const user = result.user;
            navigate('/DashBoard')
            dispatch(storeUserDetails(user));
            dispatch(logInState())
            const collectionRef=doc(db, `users/${user.uid}`)
            if(!collectionRef.exists())
                setDoc(collectionRef, {
                    AccountDetails: {
                        details:{
                            id: user.uid,
                            name: '',
                            email:'',
                            mobileNumbers: user.phoneNumber,
                            professionalTitle:'',
                            favoriteQuote:'',
                            languagesSpoken:'',
                            password: '',
                            about:'',  
                        },
                        experiences: [],
                        skills: [],
                        certificates: [],
                        profilePic:'profilepicture',
                    },
                    Services:[],
                    Companies:[],
                    Requests:[],
                    Others:{
                        MyNotice:[],
                        qNa:[]
                    },
                    Messages:[]
                })
            logOutFunction()
          }).catch((error) => {
            seterrBox2('Process failed. Please restart')
            // User couldn't sign in (bad verification code?)
            // ...
          });
    }
    
    

    const logOutFunction=()=>{
        setTimeout(() => {
            dispatch(logOutUser)
            signOut(auth).then(() => {
            console.log('user logged out')
            }).catch((error) => {
            console.log(error.message)
            });
        }, userDetails.stsTokenManager.expirationTime);
    }


    return (
        <div className='loginhalf2'>
            <h2 className='closex' onClick={props.dont1}>&times;</h2>
            <div className='form'>
                <form method="post" className='loginform' onSubmit={getOtp} style={{display: !flag ? 'block' : 'none'}}>
                    <div >
                        <img src={Logo} alt="FINDSERVICES" className='flogo'/>
                    </div> 
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                    />
                    <input type="submit" value="Get OTP Code" className='logbtn'/>
                    <p className='errmsg'>{errBox1}</p>
                    <div id="recaptcha-container"></div>
                </form>
                <form method='post' className='loginform' style={{display: flag ? 'block' : 'none'}} onSubmit={(e)=>{e.preventDefault()}}>
                    <p className='vtitle'>Verification Code</p>
                    <p className='cverify'>Check your phone for an OTP Code</p>
                    <input type="number" placeholder="Enter OTP Code" className='otpbox' ref={inputRef}/>
                    <p className='errmsg'>{errBox2}</p>
                    <input type="submit" value="Verify Code" className='verbtn' onClick={verifyOtp}/>
                </form>
            </div>
        </div>
    );
}

export default Loginhalf2;