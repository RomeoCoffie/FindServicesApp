import React, { Component } from 'react';
import '../Categories.css';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';


class ICatMenu extends Component {
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
                <Footer />
            </div>
            
        );
    }
}

export default ICatMenu;