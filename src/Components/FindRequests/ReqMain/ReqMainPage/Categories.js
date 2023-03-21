import React from 'react';
import '../FindFree.css';



const FindPopular = () => {
    return ( 
        <div className="categories">
            <h2>Main Categories</h2>
            <div className="tabs">
                <div className="tab1">
                    <a href="categories.html#handy" className="handytab">
                        <img src="han.png" alt="Handyman" className="image1"/> <br/>
                        <h3>Handyman <br/> Home&office</h3>
                    </a>
                </div>
                <div className="tab2">
                    <a href="categories.html#arty" className="artisantab">
                        <img src="art.png" alt="Artisan" className="image2"/> <br/>
                        <h3>Artisan</h3>
                    </a>
                </div>
                <div className="tab3">
                    <a href="categories.html#accounty" className="accounttab">
                        <img src="acc.png" alt="Accounting" className="image3"/> <br/>
                        <h3 className="acctext">Business & <br/>Assistance</h3>
                    </a>
                </div>
                <div className="tab4">
                    <a href="categories.html#writy" className="writingtab">
                        <img src="wri.png" alt="Writing" className="image4"/> <br/>
                        <h3 className="writingtext">Writing & <br/>Translation</h3>
                    </a>
                </div>
                <br/><br/>
                <div className="tab5">
                    <a href="categories.html#graphy" className="graphictab">
                        <img src="gra.png" alt="Graphics" className="image5"/> <br/>
                        <h3>Designs & <br/>AudioVisuals</h3>
                    </a>
                </div>

                <div className="tab6">
                    <a href="categories.html#progy" className="programmingtab">
                        <img src="pro.png" alt="Programming" className="image6"/> <br/>
                        <h3>Programming & <br/>Tech</h3>
                    </a>
                </div>

                <div className="tab7">
                    <a href="categories.html#educy" className="educationtab">
                        <img src="edu.png" alt="Education" className="image7"/> <br/>
                        <h3>Education & <br/>Training</h3>
                    </a>
                </div>

                <div className="tab8">
                    <a href="categories.html#vidy" className="videotab">
                        <img src="vid.png" alt="Videos" className="image8"/> <br/>
                        <h3>Lifestyle & <br/>Sports</h3>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default FindPopular;