import React from 'react';
import '../../freedash.css';

import { useRef } from 'react'
import App from '../../../../Firebase/firebase';
import { getFirestore, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';

const DashQuests=()=>{
    const { userDetails }=useSelector((state)=> state.logStatus)
    const { gottenData }=useSelector(state=>state.dashSubFormat)

    const reqServNeededRef=useRef('')
    const reqServNeeded=reqServNeededRef.current.value
    const reqServDesRef=useRef('')
    const reqServDes=reqServDesRef.current.value
    const reqServLocRef=useRef('')
    const reqServLoc=reqServLocRef.current.value
    const reqServBillRef=useRef('')
    const reqServBill=reqServBillRef.current.value
    const reqServFurRef=useRef('')
    const reqServFur=reqServFurRef.current.value
    const reqServPicRef=useRef('')
    const reqServPic=reqServPicRef.current.value



    // const reqSubmit=Boolean(reqServNeeded)&&Boolean(reqServDes)&&Boolean(reqServLoc)&&Boolean(reqServBill)
    const db = getFirestore(App);
    const companySubmit= async()=>{
        const docRefset=doc(db, `users/${userDetails.uid}`)
        await updateDoc(docRefset, {
            Requests: arrayUnion({
                id: nanoid(),
               requestNeeded: reqServNeeded,
                requestDescription:reqServDes,
                requestLocation: reqServLoc,
                requestBill: reqServBill,
                reqFurtherInfo:reqServFur,
                requestPic:reqServPic
            })
            
        }).then(()=>{
            alert('Request Saved')
        }).catch(()=>{
            console.log('Data not saved. Please resave')
        })
    }

    const requestData=gottenData.Requests
    const requests=requestData.map((request)=>{
        let reqID=request.id
        return <div className='ptab' key={reqID}>
                   <div>
                       <img src={request.compPic} alt=""/>
                   </div>
                   <div className='proinfo'>
                       <label>request Name:</label><span>{request.compTitle}</span><br/>
                       <label>Title:</label><span>{request.servTitle}</span> 
                   </div>
                   <div className='proinfo'>
                       <label>I WILL:</label><span>{request.servWill}</span><br/>
                       <label>Price Range:</label><span>{request.servPrice}</span>
                   </div>
                   <div>
                       <button className='provisit'>Visit Profile</button>
                       <button className='provery'>&times;Verified</button>
                   </div>
                   
               </div>
    })



        return ( 
            <div className = "dashservices">
                    <h3>Requests</h3>
                    <div className="dashservicesProTab">
                        {requests}
                    </div>
                <div className='dashservicepage'>
                    <div className='dashaccinput'>
                        <label htmlFor="Title">You need the service of a/an:</label>
                        <textarea ref={reqServNeededRef} required cols='1' rows='1'/>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="Category">To do what?:</label>
                        <textarea required cols='1' rows='1' ref={reqServDesRef}/>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="description">Request location:</label>
                        <textarea ref={reqServLocRef} required />
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="description">You are willing to pay:</label>
                        <textarea ref={reqServBillRef} required placeholder='please specify whether per day, per hour or otherwise'/>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="description">Further Information</label>
                        <textarea ref={reqServFurRef} />
                    </div>
                    
                    <div className='dashaccinput'>
                        <div>Picture here</div>
                        <label htmlFor="hdpics">Add pictures, videos or documents here:</label>
                        <input required type='file' ref={reqServPicRef} />
                    </div>
                    
                </div>
                <button onClick={companySubmit} /*disabled={!reqSubmit}*/>Add New company</button><button>Delete company</button>
                <br/>
                <button>Request Verification</button>
            </div>
        );
}

export default DashQuests;