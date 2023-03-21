import React, { Component } from 'react';
import './iCat.css';
import pic1 from '../../../../Image-Files/han.png';
import pic2 from '../../../../Image-Files/art.png';
import pic3 from '../../../../Image-Files/acc.png';
import pic4 from '../../../../Image-Files/wri.png';
import pic5 from '../../../../Image-Files/gra.png';
import pic6 from '../../../../Image-Files/pro.png';
import pic7 from '../../../../Image-Files/edu.png';
import pic8 from '../../../../Image-Files/vid.png';



class ICategories extends Component {
    render() {
        return (
            <div className="categories">
                <h2>Main Categories</h2>
                <div className="tabs">
                    <div className="itab1">
                        <a href="categories.html#handy" className="ihandytab">
                            <img src={pic1} alt="primary" className="iimage1"/>
                            <label className='ihh3' >Agriculture, Forestry & Fishing</label>
                        </a>
                    </div>

                    <div className="itab2">
                        <a href="categories.html#arty" className="iartisantab">
                            <img src={pic2} alt="mining" className="iimage2"/> <br/>
                            <h3 className='ihh3'>Mining</h3>
                        </a>
                    </div>

                    <div className="itab3">
                        <a href="categories.html#accounty" className="iaccounttab">
                            <img src={pic3} alt="manufacturing" className="iimage3"/> <br/>
                            <h3 className='ihh3'>Manufacturing</h3>
                        </a>
                    </div>

                    <div className="itab4">
                        <a href="categories.html#writy" className="iwritingtab">
                            <img src={pic4} alt="Writing" className="iimage4"/> <br/>
                            <h3 className='ihh3'>Electricity, Gas, Water, Waste</h3>
                        </a>
                    </div>
                    <br/><br/>

                    <div className="itab5">
                        <a href="categories.html#graphy" className="igraphictab">
                            <img src={pic5} alt="Graphics" className="iimage5"/> <br/>
                            <h3 className='ihh3'>Construction & Tradesman</h3>
                        </a>
                    </div>

                    <div className="itab6">
                        <a href="categories.html#progy" className="iprogrammingtab">
                            <img src={pic6} alt="Programming" className="iimage6"/> <br/>
                            <h3 className='ihh3'>Wholesale & Retail Trade</h3>
                        </a>
                    </div>

                    <div className="itab7">
                        <a href="categories.html#educy" className="ieducationtab">
                            <img src={pic7} alt="Education" className="iimage7"/> <br/>
                            <h3 className='ihh3'>Transport, Postal & Warehousing</h3>
                        </a>
                    </div>
                    <div className="itab8">
                        <a href="categories.html#vidy" className="ivideotab">
                            <img src={pic8} alt="Videos" className="iimage8"/> <br/>
                            <h3 className='ihh3'>Accomodation & Food Services</h3>
                        </a>
                    </div>
                    <div className="itab8">
                        <a href="categories.html#vidy" className="ivideotab">
                            <img src={pic8} alt="Videos" className="iimage8"/> <br/>
                            <h3 className='ihh3'>Information Media & Telecommunication</h3>
                        </a>
                    </div>
                    <div className="itab8">
                        <a href="categories.html#vidy" className="ivideotab">
                            <img src={pic8} alt="finance" className="iimage8"/> <br/>
                            <h3 className='ihh3'>Finance & Insurance Services</h3>
                        </a>
                    </div>
                    <div className="itab8">
                        <a href="categories.html#vidy" className="ivideotab">
                            <img src={pic8} alt="Videos" className="iimage8"/> <br/>
                            <h3 className='ihh3'>Rental, Hiring & Real Estate</h3>
                        </a>
                    </div>
                    <div className="itab8">
                        <a href="categories.html#vidy" className="ivideotab">
                            <img src={pic8} alt="professional" className="iimage8"/> <br/>
                            <h3 className='ihh3'>Professional, Scientific & Technical</h3>
                        </a>
                    </div>
                    <div className="itab8">
                        <a href="categories.html#vidy" className="ivideotab">
                            <img src={pic8} alt="Videos" className="iimage8"/> <br/>
                            <h3 className='ihh3'>Administrative & Support</h3>
                        </a>
                    </div>
                    <div className="itab8">
                        <a href="categories.html#vidy" className="ivideotab">
                            <img src={pic8} alt="Videos" className="iimage8"/> <br/>
                            <h3 className='ihh3'>Public Administration & Safety</h3>
                        </a>
                    </div>
                    <div className="itab8">
                        <a href="categories.html#vidy" className="ivideotab">
                            <img src={pic8} alt="Videos" className="iimage8"/> <br/>
                            <h3 className='ihh3'>Education & Training</h3>
                        </a>
                    </div>
                    <div className="itab8">
                        <a href="categories.html#vidy" className="ivideotab">
                            <img src={pic8} alt="Videos" className="iimage8"/> <br/>
                            <h3 className='ihh3'>Healthcare & Social Assistance</h3>
                        </a>
                    </div>
                    <div className="itab8">
                        <a href="categories.html#vidy" className="ivideotab">
                            <img src={pic8} alt="Videos" className="iimage8"/> <br/>
                            <h3 className='ihh3'>Arts & Recreational Services</h3>
                        </a>
                    </div>
                    <div className="itab8">
                        <a href="categories.html#vidy" className="ivideotab">
                            <img src={pic8} alt="Videos" className="iimage8"/> <br/>
                            <h3 className='ihh3'>Other Services</h3>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ICategories;