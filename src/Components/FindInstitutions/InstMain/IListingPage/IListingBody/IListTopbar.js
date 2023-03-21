/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../IListing.css';


class IListingTopBar extends Component {
    render() {
        return (
            <div className="ltnsearch-cont">
                <div>
                    <form action="get" className="ltnsearch">
                        <input type="text" className="ltnwant" placeholder="try...'plumber'" required />
                        <input type="text" className="ltnlocate" placeholder="location" />
                        <input type="submit" className="ltnsubmit" value="Search" />
                    </form>
                </div>
            </div>
        );
    }
}

export default IListingTopBar;