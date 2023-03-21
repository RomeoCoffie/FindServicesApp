import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { onAuthStateChanged, getAuth } from "firebase/auth";
import App from './Firebase/firebase';
import { useDispatch } from 'react-redux'




import './App.css';
import Homepage from './Components/Homepage_components/Find_home';
import FindFree from './Components/FindServices-Page/FreeMain/FindFree';
import CategoriesPage from './Components/FindServices-Page/FreeMain/CategoriesPage/Categories';
import ICategoriesPage from './Components/FindInstitutions/InstMain/ICategoriesPage/ICategories';
import ListingPage from './Components/FindServices-Page/FreeMain/ListingPage/Listing';
import IListingPage from './Components/FindInstitutions/InstMain/IListingPage/IListing';
import ProfilePage from './Components/FindServices-Page/FreeMain/ProfilePage/Profile';
import FreeDash from './Components/FreeDashboard/FreeDash';
import FindInst from './Components/FindInstitutions/InstMain/FindInst';
import FindReq from './Components/FindRequests/ReqMain/FindReq';
import { logInState, storeUserDetails, logOutUser } from './Components/Log-Pages/logSlice';




const Wholefind =()=> {
  const auth=getAuth(App)
  const dispatch=useDispatch()

  const { logStatus }=useSelector((state)=> state.logStatus)
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
        if(user){
            if (user.stsTokenManager.expirationTime>new Date().getTime()){
                dispatch(storeUserDetails(user));
                dispatch(logInState())
            }
            console.log('loginInAuth'+user)
        }else{
            dispatch(logOutUser)
            console.log('logoutInAuth'+user)
            dispatch(logOutUser)

        }
    })
}, [auth, dispatch])
  let paths=(
    <Routes>
      <Route path="/*" exact element={<Homepage/>} />
      <Route path="/Freelance/*" exact element={<FindFree/>} />
      <Route path="/Freelance/CategoriesPage/*" exact element={<CategoriesPage/>} />
      <Route path="/Freelance/ListingPage/*" exact element={<ListingPage/>} />
      <Route path="/Freelance/ProfilePage/*" exact element={<ProfilePage/>} />           
      <Route path="/Institutions/*" exact element={<FindInst/>} />
      <Route path="/Institutions/CategoriesPage/*" exact element={<ICategoriesPage/>} />
      <Route path="/Institutions/IListingPage/*" exact element={<IListingPage/>} />
      <Route path="/Requests/*" exact element={<FindReq/>} />
    </Routes>
   );
  
    if(logStatus){
      paths=(
        <Routes>
          <Route path="/*" exact element={<Homepage/>} />
          <Route path="/Freelance/*" exact element={<FindFree/>} />
          <Route path="/Freelance/CategoriesPage/*" exact element={<CategoriesPage/>} />
          <Route path="/Freelance/ListingPage/*" exact element={<ListingPage/>} />
          <Route path="/Freelance/ProfilePage/*" exact element={<ProfilePage/>} />           
          <Route path="/Institutions/*" exact element={<FindInst/>} />
          <Route path="/Institutions/CategoriesPage/*" exact element={<ICategoriesPage/>} />
          <Route path="/Institutions/IListingPage/*" exact element={<IListingPage/>} />
          <Route path="/Requests/*" exact element={<FindReq/>} />
          <Route path='/DashBoard/*' exact element={<FreeDash/>} />
        </Routes>
      )
    }
    return (
        <div>
          {paths}
        </div>
    );
 
}


export default Wholefind;
