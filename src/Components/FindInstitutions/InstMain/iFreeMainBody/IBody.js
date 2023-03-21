import React, { Component } from 'react';


import '../FindFree.css';
import IAds from './IAds';
import IMain from './IMain';
import ITestimonyArea from './ITestimony';





class IBody extends Component {
    render() {
        return (
            <div>
                <div className='whole'>
                    <IAds />
                    <IMain />
                </div>
                <ITestimonyArea />
                {/* <div>
                    <Route path="/Freelance/CategoriesPage" exact component={CategoriesPage} />
                    <Route path="/Freelance/ListingPage" exact component={ListingPage} />
                </div> */}
            </div>
        );
    }
}

export default IBody;