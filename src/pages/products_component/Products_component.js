import React from 'react';
import './products_component.css';
import titaleLineImg from './../../images/line.svg';
import Footer from '../../components/footer/Footer';
let name = React.createRef();
let quantity = React.createRef();
let mail = React.createRef();

class About_us_component extends React.Component {

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
        <div className='products_wrapper products_component_big_div'>
          <div className='product_div'>
            <div className='titaleDiv  wow fadeIn' >
              <div className='titaleLine'>
                <h1 className="titales">White Label</h1>
                <img src={titaleLineImg} alt="" />
              </div>
            </div>
            <p className="subtitle wow fadeIn" >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className='products_component_card_div wow fadeIn' >
              <form id='buyForm' className='buyNowForm wow fadeIn'  onSubmit={this.sendMassage} onClick={(e) => { e.stopPropagation() }} >
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
              <div className="products_component_card wow fadeIn" >
                <h1>White label</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.productsMassige ? "productsMassigeDiv" : "productsMassigeDivActiv"} onClick={this.closeMassafeBlok}>
          <div className='productMassige'>
            <p>Your message was successfully sent <br></br> Thank you  for your massege . Our agent will contact you</p>
            <button className="blue_Button" onClick={this.closeMassafeBlok}>OK</button>
          </div>
        </div>
        <Footer rel="preload"/>
      </>
    )
  }
}

export default About_us_component;