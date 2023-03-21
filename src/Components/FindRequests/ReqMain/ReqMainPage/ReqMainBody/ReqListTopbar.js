/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../ReqMain.css';


class ReqListingTopBar extends Component {
    render() {
        return (
            <div class="ltnsearch-cont">
                <div>
                    <form action="get" class="ltnsearch">
                        <input type="text" class="ltnwant" placeholder="try...'plumber'" required />
                        <input type="text" class="ltnlocate" placeholder="location" />
                        <input type="submit" class="ltnsubmit" value="Search" />
                    </form>
                </div>
            </div>
        );
    }
}

export default ReqListingTopBar;