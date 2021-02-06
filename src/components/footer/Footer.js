
import React from 'react';
import './footer.css';
// import exsolLogo from '../../images/logo11.svg';
import faceIcon from '../../images/facebook1.svg';
import faceIconBlack from '../../images/vectorBlack.svg';
import inIcon from '../../images/groupIN.svg';
import inIconBlack from '../../images/vector2Black.svg';
import menuImg1 from '../../images/menu1.svg';
import menuImg3 from '../../images/menu3.svg';

let email = React.createRef();

class Footer extends React.Component {


    sendMassageEmail = (event) => {
        let Useremail = email.current.value;
        if (Useremail === "") {
            alert('Enter yor Email');
        }
        else {
            alert(Useremail);
            Useremail = email.current.value = '';
        }
        event.preventDefault();
    }

    click = (e) => {
        e.stopPropagation()
    }

    render() {
        return (
            <>
                <div className="contactsDiv"   data-wow-delay='.33s' placeholder="inset_Input">
                    <div className="contacts"   data-wow-delay='.33s'>
                        <div className='contacts_div'>
                            <div className="contacts_Card">
                                <a href='/#header'>
                                    {/* <img  alt='' src={exsolLogo} className="Footer_logo" /> */}
                                </a>
                                <div className="employee_Contacts">
                                    <div className="employee_iconse">
                                        <a href='https://www.facebook.com/Betting-Solutions-LLC-374356069856869/' target="_blank" rel="noopener noreferrer">
                                            <img alt="" src={faceIcon} className='icon' />
                                            <img alt="" src={faceIconBlack} className='iconBlack' />
                                        </a>
                                    </div>
                                    <div className="employee_iconse">
                                        <a href='https://www.linkedin.com/company/betting-solutions-llc/' target="_blank" rel="noopener noreferrer">
                                            <img alt="" src={inIcon} className='icon' />
                                            <img alt="" src={inIconBlack} className='iconBlack' />
                                        </a>
                                    </div>
                                </div>
                                <div className='locationDiv'>
                                    <img src={menuImg1} alt=""></img>
                                    <address>Domain Building, 102/104, </address>
                                </div>
                                <div className='emailDiv'>
                                    <img src={menuImg3} alt=""></img>
                                    <div>
                                        <a href="mailto: info@exsol.io">info@exsol.io</a>
                                        <p>Online Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts_Card">
                                <h1 className="firsst_P">{Number(localStorage.getItem('setLanguage')) === 1 ? "Corporate" : Number(localStorage.getItem('setLanguage')) === 2 ? "Կորպորատիվ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "Корпоративный" : localStorage.getItem('setLanguage') === null ? "Կորպորատիվ" : Number(localStorage.getItem('setLanguage')) === 4}</h1>
                                <ul className='footer_Menu'>
                                        <li><a href='/#about'>{Number(localStorage.getItem('setLanguage')) === 1 ? "ABOUT US" : Number(localStorage.getItem('setLanguage')) === 2 ? "Մեր մասին" :  Number(localStorage.getItem('setLanguage')) === 3 ? "ПРО НАС" : localStorage.getItem('setLanguage') === null ? "Մեր մասին" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#products'>{Number(localStorage.getItem('setLanguage')) === 1 ? "PRODUCTS" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԱՊՐԱՆՔՆԵՐ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "ТОВАРЫ" : localStorage.getItem('setLanguage') === null ? "ԱՊՐԱՆՔՆԵՐ" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#team_board'>{Number(localStorage.getItem('setLanguage')) === 1 ? "TEAM" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԹԻՄ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "КОМАНДА" : localStorage.getItem('setLanguage') === null ? "ԹԻՄ" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#media_blog'>{Number(localStorage.getItem('setLanguage')) === 1 ? "BLOG" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԲԼՈԳ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "БЛОГ" : localStorage.getItem('setLanguage') === null ? "ԲԼՈԳ" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#our_Partners'>{Number(localStorage.getItem('setLanguage')) === 1 ? "PARTNERS" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԳՈՐԾԸՆԿԵՐՆԵՐ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "ПАРТНЕРЫ" : localStorage.getItem('setLanguage') === null ? "ԳՈՐԾԸՆԿԵՐՆԵՐ" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#our_Partners'>{Number(localStorage.getItem('setLanguage')) === 1 ? "CONTACT US" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԿԱՊ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "СВЯЗАТЬСЯ" : localStorage.getItem('setLanguage') === null ? "Մեր մասին" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contacts_Card">
                            <form className='insetEmail_footer' onSubmit={this.sendMassageEmail} onClick={(e) => { e.stopPropagation() }}>
                                <h1 className="firsst_P">{Number(localStorage.getItem('setLanguage')) === 1 ? "Stay in touch! Subscribe to our newsletter." : Number(localStorage.getItem('setLanguage')) === 2 ? "Մնալ կապի մեջ! Բաժանորդագրվեք մեր տեղեկագրին:" :  Number(localStorage.getItem('setLanguage')) === 3 ? "Оставайтесь на связи! Подписывайтесь на нашу новостную рассылку." : localStorage.getItem('setLanguage') === null ? "Մնալ կապի մեջ! Բաժանորդագրվեք մեր տեղեկագրին:" : Number(localStorage.getItem('setLanguage')) === 4}</h1>
                                <input type="email" ref={email} maxLength='40' required=" "></input>
                                <div className='backBtn'><input type="submit" value="SUBMIT" className="blue_Button " /></div>
                            </form>
                        </div>
                    </div>
                    <div className='footerLLC'>
                        <p  data-wow-delay='.33s'>© 2019 EXSOL.LLC All Rights Reserved</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer;