import React from 'react';
import '../../freedash.css';
import ProTab from '../../../FindServices-Page/FreeMain/ListingPage/ListingBody/ProTab';
import DashServicePage from './DashServicePage';
import { useSelector } from 'react-redux'



const DashServices =()=> {
    const { gottenData }=useSelector(state=>state.dashSubFormat)

    const servicesData=gottenData.Services
    const serviceTab=servicesData.map((service)=>{
        return <div className='ptab' key={service.id}>
                    <div>
                        <img src={service.servPic} alt=""/>
                    </div>
                    <div className='proinfo'>
                        <label>Name:</label><span>{gottenData.AccountDetails.details.name}</span><br/>
                        <label>Title:</label><span>{service.servTitle}</span> 
                    </div>
                    <div className='proinfo'>
                        <label>I WILL:</label><span>{service.servWill}</span><br/>
                        <label>Price Range:</label><span>{service.servPrice}</span>
                    </div>
                    <div>
                        <button className='provisit'>Visit Profile</button>
                        <button className='provery'>&times;Verified</button>
                    </div>
                    
                </div>

    })


        return ( 
            <div className = "dashservices" >
                <h3>Services</h3>
                <div className="dashservp">
                    <div className="dashservicesProTab">
                        {serviceTab}
                        <ProTab />
                    </div><br/>
                    <div>
                        <DashServicePage />
                    </div>
                </div>
            </div>
        );
}

export default DashServices;