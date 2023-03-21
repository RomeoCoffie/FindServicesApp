import React, { Component } from 'react';
// import BackgroundSlider from 'react-background-slider';

import Menu from './Menu.js';
import /*styles from*/ '../FindFree.css';
import FindSearch from './FindSearch';
import FindPopular from './FindPopular';
// import image1 from '../../../../Image-Files/image1.jpg';
// import image2 from '../../../../Image-Files/image2.jpg';
// import image3 from '../../../../Image-Files/image10.jpg';
// import image4 from '../../../../Image-Files/image13.jpg';
// import image5 from '../../../../Image-Files/image16.jpg';
// import image6 from '../../../../Image-Files/images7.jpg';



class Slider extends Component {
    render() {
        return (
            <div className='slide' /*className={styles.Slider}*/ >
                <Menu />
                <FindSearch />
                <FindPopular />
                {/* <BackgroundSlider
                    images={[image1, image2, image3, image4, image5, image6]}
                    duration={10}
                    transition={2}
                /> */}
            </div>
        );
    }
}

export default Slider;