import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../freedash.css';
import DashMenu from './DashMenu';
// import DashMenuSub from './DashMenuSub';
import DashOverview from './DashSubs/DashOverview';
import DashAccount from './DashSubs/DashAccount';
import DashServices from './DashSubs/DashServices';
import DashNotice from './DashSubs/DashNotices';
import DashQuests from './DashSubs/DashQuestions';
import DashInbox from './DashSubs/DashIn';
import DashStats from './DashSubs/DashStats';
import DashCompanyPage from './DashSubs/DashCompaniesPage';



class DashMain extends Component {
    render() {
        return ( 
            <div className = "dashmain" >
                <DashMenu />
                <span className="dashmenusub">
                    <Routes>
                        <Route path="overview" exact element={<DashOverview/>} />
                        <Route path="accdetail" exact element={<DashAccount/>} />
                        <Route path="services" exact element={<DashServices/>} />
                        <Route path="pubnotice" exact element={<DashNotice/>} />
                        <Route path="companies" exact element={<DashCompanyPage/>} />
                        <Route path="qanda" exact element={<DashQuests/>} />
                        <Route path="messages" exact element={<DashInbox/>} />
                        <Route path="stats" exact element={<DashStats/>} />
                    </Routes>
                </span>
                
                {/* <DashMenuSub /> */}
            </div>
        );
    }
}

export default DashMain;