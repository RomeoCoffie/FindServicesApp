import React from 'react';
import '../../freedash.css';
import { useRef, useState } from 'react'
import App from '../../../../Firebase/firebase';
import { getFirestore, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';
import { storage } from '../../../../Firebase/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const DashServicePage =()=> {
    const { userDetails }=useSelector((state)=> state.logStatus)
    const [servHeaderPic, setServHeaderPic]=useState(null)
    const [serviceHeader, setServiceHeader]=useState(null)


    const servTitleRef=useRef('')
    const servTitle=servTitleRef.current.value
    const servCatRef=useRef('')
    const servCat=servCatRef.current.value
    const servWillRef=useRef('')
    const servWill=servWillRef.current.value
    const servWebRef=useRef('')
    const servWeb=servWebRef.current.value
    const servlocRef=useRef('')
    const servloc=servlocRef.current.value
    const servKeyRef=useRef('')
    const servKey=servKeyRef.current.value
    const servMeExpRef=useRef('')
    const servMeExp=servMeExpRef.current.value
    const servYouExpRef=useRef('')
    const servYouExp=servYouExpRef.current.value
    const servPriceRef=useRef('')
    const servPrice=servPriceRef.current.value

    // const serSubmit=Boolean(servTitle)&&Boolean(servCat)&&Boolean(servWill)&&Boolean(servloc)&&Boolean(servPic)&&Boolean(servMeExp)&&Boolean(servYouExp)&&Boolean(servPrice)
    const db = getFirestore(App);
    const serviceSubmit= async()=>{
        const docRefset=doc(db, `users/${userDetails.uid}`)
        await updateDoc(docRefset, {
            Services: arrayUnion({
                id: nanoid(),
               serviceTitle: servTitle,
                serviceCategory: servCat,
                serviceIWIll:servWill,
                serviceWeb: servWeb,
                serviceLocation:servloc,
                servicePicture:serviceHeader,
                serviceKeywords:servKey,
                serviceExpectationMe: servMeExp,
                serviceExpectationYou: servYouExp,
                servicePrice: servPrice
            })
            
        }).then(()=>{
            alert('Account Details Saved')
        }).catch(()=>{
            console.log('Data not saved. Please resave')
        })
    }

    const submitServicePic=()=>{
        const servHeadPicRef=ref(storage, `${userDetails.uid}/serviceHeadPic`)
        uploadBytes(servHeadPicRef, servHeaderPic).then((snapshot)=>{
            console.log('upload successful')
            getDownloadURL(servHeadPicRef)
            .then((url)=>{
                setServiceHeader(url)
            })
        })
    }


        return ( 
            <div>
                <div className = "dashservicepage" >
                    <div className='dashaccinput'>
                        <label htmlFor="Title">Service Title:</label>
                        <textarea ref={servTitleRef} required cols='1' rows='1'/>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="Category">Category</label>
                        <select id='catdrop' name='category' ref={servCatRef} required>
                            <option value='' disabled selected>Choose a category</option>
                            <option value='HW'>HandyWork</option>
                            <option value='AT'>Artisan</option>
                            <option value='AF'>Accounting & Finance</option>
                            <option value='WT'>Writing & Translation</option>
                            <option value='GD'>Graphics & Design</option>
                            <option value='PI'>Programming & I.T</option>
                            <option value='ET'>Education & Training</option>
                            <option value='VA'>Video, Audio & Animation</option>
                        </select>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="description">I WILL</label>
                        <textarea ref={servWillRef} required className='inputwiden'>Do everything that i want to do</textarea>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="website">Website</label>
                        <textarea ref={servWebRef}>dextsolutions.com</textarea>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="location">Your Location</label>
                        <textarea  ref={servlocRef}>This is just a test</textarea>
                    </div>
                    
                    <div className='dashaccinput'>
                        <label htmlFor="keywords">Add keywords to your listing</label>
                        <textarea ref={servKeyRef} className='inputwiden'>this is just a test</textarea>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="iprovide">Things you can expect from me:</label>
                        <textarea required ref={servMeExpRef} className='inputwiden'>This is just a test</textarea>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="uprovide">Things i expect from you:</label>
                        <textarea required ref={servYouExpRef} className='inputwiden'>This is just a test</textarea>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="price">Add prices for various durations</label>
                        <textarea required ref={servPriceRef} className='inputwiden'>this is just a text</textarea>
                    </div>
                    <div className='dashaccinput'>
                                    <label htmlFor='ExpAdded' >Service Picture </label>
                                    <div>
                                        <p>Service Header Here</p>
                                    </div>
                                </div>
                                <div className='dashaccinput'>
                                    <label htmlFor="certfile">Upload a header picture</label>
                                    <input accept=".png, .jpg, .jpeg" onChange={(e)=>setServHeaderPic(e.target.files)} required type="file" name="certfile" id="certfile"/>
                                    <button onClick={submitServicePic}>Submit Picture</button>
                                </div>
                </div>
                <button onClick={serviceSubmit} /*disabled={!serSubmit}*/>Add New Service</button><button>Delete Service</button>
            </div>
        )
}

export default DashServicePage;