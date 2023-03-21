import React, { Component } from 'react';
import './Cat.css';
import pic1 from '../../../../Image-Files/han.png';
import pic2 from '../../../../Image-Files/art.png';
import pic3 from '../../../../Image-Files/acc.png';
import pic4 from '../../../../Image-Files/wri.png';
import pic5 from '../../../../Image-Files/gra.png';
import pic6 from '../../../../Image-Files/pro.png';
import pic7 from '../../../../Image-Files/edu.png';
import pic8 from '../../../../Image-Files/vid.png';


class Categories extends Component {
    render() {
        return (
            <div className="categories">
                <h2>Main Categories</h2>
                <div className="tabs">
                    <div className="tab1">
                        <a href="categories.html#handy" className="handytab">
                            <img src={pic1} alt="Handyman" className="image1"/> <br/>
                            <h3 className='hh3' >HandyWork <br/>Home & office</h3>
                        </a>
                    </div>

                    <div className="tab2">
                        <a href="categories.html#arty" className="artisantab">
                            <img src={pic2} alt="Artisan" className="image2"/> <br/>
                            <h3 className='hh3'>Artisans & <br/>Craftsman</h3>
                        </a>
                    </div>

                    <div className="tab3">
                        <a href="categories.html#accounty" className="accounttab">
                            <img src={pic3} alt="Accounting" className="image3"/> <br/>
                            <h3 className='hh3'>Business & <br/>Assistance</h3>
                        </a>
                    </div>

                    <div className="tab4">
                        <a href="categories.html#writy" className="writingtab">
                            <img src={pic4} alt="Writing" className="image4"/> <br/>
                            <h3 className='hh3'>Writing & <br/>Translation</h3>
                        </a>
                    </div>
                    <br/><br/>

                    <div className="tab5">
                        <a href="categories.html#graphy" className="graphictab">
                            <img src={pic5} alt="Graphics" className="image5"/> <br/>
                            <h3 className='hh3'>Designs & <br/>Audio/Visuals</h3>
                        </a>
                    </div>

                    <div className="tab6">
                        <a href="categories.html#progy" className="programmingtab">
                            <img src={pic6} alt="Programming" className="image6"/> <br/>
                            <h3 className='hh3'>Programming & <br/>Tech</h3>
                        </a>
                    </div>

                    <div className="tab7">
                        <a href="categories.html#educy" className="educationtab">
                            <img src={pic7} alt="Education" className="image7"/> <br/>
                            <h3 className='hh3'>Education & <br/>Training</h3>
                        </a>
                    </div>

                    <div className="tab8">
                        <a href="categories.html#vidy" className="videotab">
                            <img src={pic8} alt="Videos" className="image8"/> <br/>
                            <h3 className='hh3'>Lifestyle & <br/>Sports</h3>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;