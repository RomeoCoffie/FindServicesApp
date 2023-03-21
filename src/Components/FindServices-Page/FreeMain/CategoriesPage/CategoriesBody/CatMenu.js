import React, { Component } from 'react';
import '../Categories.css';
import Header from '../../../../Header/Header';


class CatMenu extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="hero">
                    <h2 className='backcat'>Categories</h2>
                    <div>
                        <form action="get" className="bksearch">
                            <input type="text" className="bkwant" placeholder="try...'plumber'" required />
                            <input type="text" className="bklocate" placeholder="location" />
                            <input type="submit" className="bksubmit" value="Search" />
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default CatMenu;