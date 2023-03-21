import React, { Component } from 'react';
import '../freedash.css';
import DashOverview from './DashSubs/DashOverview';
import DashAccount from './DashSubs/DashAccount';
import DashServices from './DashSubs/DashServices';
import DashNotice from './DashSubs/DashNotices';
import DashReviews from './DashSubs/DashReview';
import DashQuests from './DashSubs/DashQuestions';
import DashInbox from './DashSubs/DashIn';
import DashStats from './DashSubs/DashStats';


class DashMenuSub extends Component {
    render() {
        return ( 
            <div className = "dashmenusub" >
                <DashOverview />
                <DashAccount />
                <DashServices />
                <DashNotice />
                <DashReviews />
                <DashQuests />
                <DashInbox />
                <DashStats />
            </div>
        );
    }
}

export default DashMenuSub;