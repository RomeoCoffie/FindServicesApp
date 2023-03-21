import React from 'react';
import '../../freedash.css';
import { useRef } from 'react'
import App from '../../../../Firebase/firebase';
import { getFirestore, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';


const DashCompanyPage =()=> {
    const { userDetails }=useSelector((state)=> state.logStatus)
    const { gottenData }=useSelector(state=>state.dashSubFormat)


    const compNameRef=useRef('')
    const compName=compNameRef.current.value
    const compCatRef=useRef('')
    const compCat=compCatRef.current.value
    const compAboutRef=useRef('')
    const compAbout=compAboutRef.current.value
    const compWebRef=useRef('')
    const compWeb=compWebRef.current.value
    const compServRef=useRef('')
    const compServ=compServRef.current.value
    const compContactRef=useRef('')
    const compContact=compContactRef.current.value
    const compLocRef=useRef('')
    const compLoc=compLocRef.current.value
    const compPicRef=useRef('')
    const compPic=compPicRef.current.value
    const compKeyRef=useRef('')
    const compKey=compKeyRef.current.value
    const compPriceRef=useRef('')
    const compPrice=compPriceRef.current.value



    // const comSubmit=Boolean(compName)&&Boolean(compCat)&&Boolean(compServ)&&Boolean(compLoc)&&Boolean(compPic)&&Boolean(compContact)
    const db = getFirestore(App);
    const companySubmit= async()=>{
        const docRefset=doc(db, `users/${userDetails.uid}`)
        await updateDoc(docRefset, {
            companys: arrayUnion({
                id: nanoid(),
               companyName: compName,
                companyCategory: compCat,
                companyDescription:compAbout,
                companyServices: compServ,
                companyWeb: compWeb,
                companyLocation:compLoc,
                companyPicture:compPic,
                companyKeywords:compKey,
                companyContacts: compContact,
                companyPrice: compPrice
            })
            
        }).then(()=>{
            alert('Account Details Saved')
        }).catch(()=>{
            console.log('Data not saved. Please resave')
        })
    }
 
     //RETRIEVE EXPERIENCES
     const companyData=gottenData.companys
     const companys=companyData.map((company)=>{
         let compID=company.id
         return <div className='ptab' key={compID}>
                    <div>
                        <img src={company.compPic} alt=""/>
                    </div>
                    <div className='proinfo'>
                        <label>Company Name:</label><span>{company.compTitle}</span><br/>
                        <label>Title:</label><span>{company.servTitle}</span> 
                    </div>
                    <div className='proinfo'>
                        <label>I WILL:</label><span>{company.servWill}</span><br/>
                        <label>Price Range:</label><span>{company.servPrice}</span>
                    </div>
                    <div>
                        <button className='provisit'>Visit Profile</button>
                        <button className='provery'>&times;Verified</button>
                    </div>
                    
                </div>
     })


        return ( 
            <div className = "dashservices">
                    <h3>Companies</h3>
                    <div className="dashservicesProTab">
                        {companys}
                    </div>
                <div className='dashservicepage'>
                    <div className='dashaccinput'>
                        <label htmlFor="Title">Company Name:</label>
                        <textarea ref={compNameRef} required cols='1' rows='1'/>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="Category">Category</label>
                        <select id='catdrop' name='category' ref={compCatRef} required>
                            <option value='' disabled selected>Choose a category</option>
                            <option value='AGF'>Agriculture, Forestry & Fishing</option>
                            <option value='MI'>Mining</option>
                            <option value='MA'>Manufacturing</option>
                            <option value='EGW'>Electricity, Gas, Water, Waste</option>
                            <option value='CT'>Construction & Tradesman</option>
                            <option value='WR'>Wholesale & Retail Trade</option>
                            <option value='ET'>Education & Training</option>
                            <option value='TPW'>Transport, Postal & Warehousing</option>
                            <option value='AF'>Accomodation & Food Services</option>
                            <option value='IT'>Information Media & Telecommunication</option>
                            <option value='FI'>Finance & Insurance Services</option>
                            <option value='RE'>Rental, Hiring & Real Estate</option>
                            <option value='ST'>Professional, Scientific & Technical</option>
                            <option value='AS'>Administrative & Support</option>
                            <option value='PA'>Public Administration & Safety</option>
                            <option value='HA'>Healthcare & Social Assistance</option>
                            <option value='AR'>Arts & Recreational Services</option>
                            <option value='OT'>Other Services</option>
                            
                        </select>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="description">About Company</label>
                        <textarea ref={compAboutRef} required className='inputwiden'/>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="description">Company Services</label>
                        <textarea ref={compServRef} required className='inputwiden'/>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="description">Company Contacts</label>
                        <textarea ref={compContactRef} required className='inputwiden'/>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="website">Company Website</label>
                        <textarea ref={compWebRef}/>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="location">Company Location</label>
                        <textarea required ref={compLocRef}/>
                    </div>
                    <div className='dashaccinput'>
                        <div>Picture here</div>
                        <label htmlFor="hdpics">Header Pictures</label>
                        <input  type='file' ref={compPicRef} />
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="keywords">Add keywords to your listing</label>
                        <textarea ref={compKeyRef} className='inputwiden'/>
                    </div>
                    <div className='dashaccinput'>
                        <label htmlFor="price">Add prices for various durations</label>
                        <textarea required ref={compPriceRef} className='inputwiden'/>
                    </div>
                </div>
                <button onClick={companySubmit} /*disabled={comSubmit}*/>Add New company</button><button>Delete company</button>
                <br/>
                <button>Request Verification</button>
            </div>
        )
}

export default DashCompanyPage;