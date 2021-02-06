import React from 'react';
import './partnersSlider.css'
import OWLcorusel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

import img_Collor from '../../images/betconstruct_logo.png';
import img_Collorless from '../../images/betconstruct_logo(1).png';
import img_Collorless2 from '../../images/bitex-logo(1).png';
import img_Collor2 from '../../images/bitex-logo.png';

const options = {
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        650: {
            items: 2,
        },
    },
};
  



function PartnersSlider() {
  return (
    <section className='partnersSlider'>
      <OWLcorusel  items='2' autoplayHoverPause dots loop responsive={options.responsive} >
            <div className="partner_Logo" >
                <a href='https://www.betconstruct.com/' >
                    <img alt='' src={img_Collor} className="img_Collor" />
                    <img alt='' src={img_Collorless} className="img_Collorless" />
                </a> 
            </div> 
            <div className="partner_Logo" >
                <a href='https://www.bitexuae.com/' >
                    <img alt='' src={img_Collorless2} className="img_Collor" />
                    <img alt='' src={img_Collor2} className="img_Collorless" />
                </a>
            </div>
            <div className="partner_Logo" >
                <a href='https://www.betconstruct.com/' >
                    <img alt='' src={img_Collor} className="img_Collor" />
                    <img alt='' src={img_Collorless} className="img_Collorless" />
                </a> 
            </div> 
            <div className="partner_Logo" >
                <a href='https://www.bitexuae.com/' >
                    <img alt='' src={img_Collorless2} className="img_Collor" />
                    <img alt='' src={img_Collor2} className="img_Collorless" />
                </a>
            </div>
      </OWLcorusel>
    </section>
  );
}

export default PartnersSlider;