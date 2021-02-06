import React from 'react';
import './exchange.css';
import titaleLineImg from './../../images/line.svg';
import exsolART from './../../images/exsolArt.svg';
// import
import Footer from './../../components/footer/Footer';



let name = React.createRef();
let quantity = React.createRef();
let mail = React.createRef();

class Exchange extends React.Component {

  state = {
    productBlog: false,
    productsMassige: false,
  }

  click = (e) => {
    e.stopPropagation()
  }

  sendMassage = (event) => {
    let company = name.current.value;
    let quantityO = quantity.current.value;
    let Email = mail.current.value;
    if (company === "" || quantityO === "" || Email === "") {
      alert('Fill in all the fields')
    }
    else {
      alert(company + "  " + quantityO + " " + Email);
      company = name.current.value = '';
      quantityO = quantity.current.value = '';
      Email = mail.current.value = '';
      this.setState({ productsMassige: !this.state.productsMassige })
    }
    event.preventDefault();
  }

  closeMassafeBlok = () => {
    this.setState({ productsMassige: !this.state.productsMassige })
  }

  render() {
    return (
      <>
        <div className='particles_ProductsDiv' rel="preload">
          {/* <div className='particles_Products'>
            <Particles params={particleOpt} />
            <Particles params={particleOpt} />
          </div> */}
        </div>
        <div className='products_wrapper products_component_big_div'>
          <div className='product_div'>
            <div className='titaleDiv  wow fadeIn' >
              <div className='titaleLine'>
                <h1 className="titales">
                    {Number(localStorage.getItem('setLanguage')) === 1 ? "Exchange API"
                    : Number(localStorage.getItem('setLanguage')) === 2 ? "Փոխանակում API"
                    : Number(localStorage.getItem('setLanguage')) === 3 ? 'Обмен API'
                    : localStorage.getItem('setLanguage') === null ? "Փոխանակում API" 
                    : Number(localStorage.getItem('setLanguage')) === 4}
                </h1>
                <img src={titaleLineImg} alt="" />
              </div>
            </div>
            <p className="subtitle wow fadeIn" >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className='exchangeDiv'>
                <div className='exchangeDiv__text'>
                    <h3>Introduction</h3>
                    <p>The Provisioning API can be used to create new Google Analytics accounts and enable Google Analytics for your customers at scale. It is intended for qualified service providers and large partners.</p>
                    <p>For example, you could use the Provisioning API as part of a new user onboarding process to create a new Google Analytics account for a client and then use additional Management API resources to programmatically configure the account and link it to Google Ads. This can all be automated and initiated from within your own admin or reporting interface.</p>
                    <div className='exchangeDiv__subtitle'>
                        <p>
                        The Provisioning API can be used to create new Google Analytics accounts and enable Google Analytics for your customers at scale. It is intended for qualified service providers and large partners. The Provisioning API can be used to create new Google Analytics accounts and enable Google Analytics for your customers at scale. It is intended for qualified service providers and large partners. 
                        </p>
                    </div>
                    <p>For example, you could use the Provisioning API as part of a new user onboarding process to create a new Google Analytics account for a client and then use additional Management API resources to programmatically configure the account and link it to Google Ads. This can all be automated and initiated from within your own admin or reporting interface.</p>
                </div>
                <div className='exchangeDiv__img'>
                    <img src={exsolART} alt=''/>
                </div>
            </div>
          </div> 
        </div>
        <form id='buyForm' className='buyNowForm'  onSubmit={this.sendMassage} onClick={(e) => { e.stopPropagation() }} >
            <div className='inputs'>
                <input className='buyInputs' type='text' maxlength="60" required=" " ref={name} />
                <label>Insert your name</label>
            </div>
            <div className='inputs'>
                <input className='buyInputs' type='text' maxlength="60" required=" " ref={quantity} />
                <label>Insert your email</label>
            </div>
            <p>Write your message</p>
            <textarea className='buyInputsArea' rows="10" cols="50" name="comment" form="buyForm" ref={mail}></textarea>
            <div className='backBtn'><input type="submit" className='blue_Button' /></div>
        </form>
        <div className={this.state.productsMassige ? "productsMassigeDiv" : "productsMassigeDivActiv"} onClick={this.closeMassafeBlok}>
            <div className='productMassige'>
                <p>Your massage was successfully sent <br></br> Thank you  for your massege. Our agent will contact you</p>
                <button className="blue_Button" onClick={this.closeMassafeBlok}>OK</button>
            </div>
        </div>
        <Footer rel="preload"/>
      </>
    )
  }
}

export default Exchange;