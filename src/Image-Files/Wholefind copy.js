import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';


import './App.css';
import Homepage from './Components/Homepage_components/Find_home';
import FindFree from './Components/FindServices-Page/FreeMain/FindFree';
import CategoriesPage from './Components/FindServices-Page/FreeMain/CategoriesPage/Categories';
import ICategoriesPage from './Components/FindInstitutions/InstMain/ICategoriesPage/ICategories';
import ListingPage from './Components/FindServices-Page/FreeMain/ListingPage/Listing';
import IListingPage from './Components/FindInstitutions/InstMain/IListingPage/IListing';
import ProfilePage from './Components/FindServices-Page/FreeMain/ProfilePage/Profile';
// import FreeDash from './Components/FindServices-Page/FreeDashboard/FreeDash';
import FindInst from './Components/FindInstitutions/InstMain/FindInst';
import FindReq from './Components/FindRequests/ReqMain/FindReq';





class Wholefind extends Component {
   
  render (){
    return (
        <div>
          <Routes>
            <Route path="/" exact element={<Homepage/>} />
            <Route path="/Freelance" exact element={<FindFree/>} />
            <Route path="/Freelance/CategoriesPage" exact element={<CategoriesPage/>} />
            <Route path="/Freelance/ListingPage" exact element={<ListingPage/>} />
            <Route path="/Freelance/ProfilePage" exact element={<ProfilePage/>} />           
            <Route path="/Institutions" exact element={FindInst} />
            <Route path="/Institutions/CategoriesPage" exact element={<ICategoriesPage/>} />
            <Route path="/Institutions/IListingPage" exact element={<IListingPage/>} />
            <Route path="/Requests" exact element={<FindReq/>} />
            {/* <Route path='/Freelance/DashBoard' exact component={FreeDash} /> */}
            {/* <Homepage /> */}
            {/* <FindFree /> */}
          </Routes>
            
        </div>
    );
  }
 
}

export default Wholefind;
