import React, { Component } from 'react';


import '../FindFree.css';
import Ads from './Ads';
import Main from './Main';
import TestimonyArea from './Testimony';





class Body extends Component {
    render() {
        return (
            <div>
                <div className='whole'>
                    <Ads />
                    <Main />
                </div>
                <TestimonyArea />
                {/* <div>
                    <Route path="/Freelance/CategoriesPage" exact component={CategoriesPage} />
                    <Route path="/Freelance/ListingPage" exact component={ListingPage} />
                </div> */}
            </div>
        );
    }
}

export default Body;