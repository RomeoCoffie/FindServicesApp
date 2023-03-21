import React, { useEffect } from 'react';

import './freedash.css';
import DashHead from './DashBody/DashHead';
import DashMain from './DashBody/DashMain';
import { getAuth } from "firebase/auth";
import App from '../../Firebase/firebase';
import { useDispatch } from 'react-redux'
import { getData } from './DashBody/DashSubs/DashSubsSlice'
import { useSelector } from 'react-redux'
import { doc, onSnapshot, getFirestore } from "firebase/firestore";



const FreeDash=()=> {
    const { userDetails }=useSelector((state)=> state.logStatus)
    const db = getFirestore(App);
    const dispatch=useDispatch()
    const auth=getAuth(App)

    useEffect(()=>{
        const getAccData=async (auth)=>{
            const docRefget=doc(db, `users/${userDetails.uid}`)
            let docSnap=await onSnapshot(docRefget, (doc) => {
                let myData=doc.data()
                dispatch(getData(myData))
                console.log("Current data in DashHead useEffect: ", myData);
            })
        }
        getAccData()
    },[auth, db, dispatch, userDetails])

    return (
        <div className = "freedash" >
            <DashHead />
            <DashMain />
        </div> 
    );
}

export default FreeDash;