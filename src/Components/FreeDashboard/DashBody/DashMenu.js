import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../freedash.css';
// import DashOverview from './DashSubs/DashOverview';
// import DashAccount from './DashSubs/DashAccount';
// import DashServices from './DashSubs/DashServices';
// import DashNotice from './DashSubs/DashNotices';
// import DashReviews from './DashSubs/DashReview';
// import DashQuests from './DashSubs/DashQuestions';
// import DashInbox from './DashSubs/DashIn';
// import DashStats from './DashSubs/DashStats';


class DashMenu extends Component {
    render() {
        return (
            <div> 
                <div className = "dashmenu" >
                    <ul>
                        <li><Link to="/DashBoard/overview">Overview</Link></li>
                        <li><Link to="/DashBoard/accdetail">Account Details</Link></li>
                        <li><Link to="/DashBoard/services">Services</Link></li>
                        <li><Link to="/DashBoard/companies">Companies</Link></li>
                        <li><Link to="/DashBoard/qanda">Requests</Link></li>
                        <li><Link to="/DashBoard/messages">Messages</Link></li>
                        <li><Link to="/DashBoard/pubnotice">Other Notices</Link></li>
                        <li><Link to="/DashBoard/stats">Statistics</Link></li>
                    </ul>
                    <button>Upgrade Services</button>
                </div>
            </div>    
        );
    }
}

export default DashMenu;