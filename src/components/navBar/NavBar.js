import React from 'react';
import onClickOutside from "react-onclickoutside";
import { ReactComponent as ExsolLogo } from '../../images/logo11.svg';
import arrow from './../../images/arrow.svg'
import './navBar.css'
import faceBookLogo from '../../images/facebooklogobutton.svg'
import linkedinLogo from '../../images/linkedin.svg'
import menuImg1 from '../../images/menu1.svg'
import menuImg3 from '../../images/menu3.svg'
import paperPlane from '../../images/paper-plane.svg'
import {rerender} from '../../redux/state'

let navEmail = React.createRef();
class NavBar  extends React.Component  {
    
    constructor(props) {
        super(props);
        this.state = {
            hamburgerActiv: false,
            changeLanguage: false,
            scrolled: false,
            value: 'ENG',
            productsMassige: false,
            productBlog: false,
            langaugeState: '1',
            addrtype: '2',
            changeLanguageActiv: true,
        };
    }
    handleClickOutside = evt => {
        this.changeLanguageOFF()
    };

        changeLanguageON = (props) => {
            if(this.state.changeLanguageActiv === false){
                this.changeLanguageOFF()
            }
            else{
                this.setState({changeLanguageActiv: false})
            }

        };
        changeLanguageOFF = () => {
            this.setState({changeLanguageActiv: true})
        };

        changeLanguageArm = (e) => {
            let x = localStorage.getItem('setLanguage');
            if (x === '2') {
                this.setState({hamburgerActiv: false})
                this.changeLanguageOFF()
            } else {
              localStorage.setItem('setLanguage', 2);
              rerender();
              this.setState({hamburgerActiv: false})
              this.changeLanguageOFF()
            }
          };
        changeLanguageEng = (e) => {
            let x = localStorage.getItem('setLanguage');
            if (x === '1') {
                this.setState({hamburgerActiv: false})
                this.changeLanguageOFF()
            } else {
              localStorage.setItem('setLanguage', 1);
              rerender();
              this.setState({hamburgerActiv: false})
              this.changeLanguageOFF()
            }
          };
        changeLanguageRus = (e) => {
            let x = localStorage.getItem('setLanguage');
            if (x === '3') {
                this.setState({hamburgerActiv: false})
                this.changeLanguageOFF()
            } else {
              localStorage.setItem('setLanguage', 3);
              rerender();
              this.setState({hamburgerActiv: false})
              this.changeLanguageOFF()
            }
          };



    sendMassageNAV = () =>{
        let EmailN = navEmail.current.value;
        if (EmailN  === "" ) {
            // alert('Fill in all the fields')
          }
          else{
            // alert('mail:  ' + EmailN);
            EmailN = navEmail.current.value = '';
            this.setState({ productsMassige: !this.state.productsMassige })
          }
    }
    closeMassafeBlok = () => {
        this.setState({ productsMassige: !this.state.productsMassige })
      }
    
    componentDidMount() {
        window.addEventListener('scroll', () => {
            let isTop = window.scrollY < 60;
            if (isTop !== true) {
                this.setState({ scrolled: true });
                setInterval(() => {
                    this.setState({ scrolled: false });
                }, 1500);
            }
            else {
                this.setState({ scrolled: false })
            }
        });
        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
        window.removeEventListener('click', () => {
            this.changeLanguageOFF()
            alert(1)
        })
    }

    click = (e) => {
        e.stopPropagation()
    }

    handleChangelanguage = (event) => {
        this.setState({ value: event.target.value });
        event.preventDefault();
    }

    render() {
        return (
            <section >
                <div className={this.state.scrolled ? 'menu_Section menuOff' : 'menu_Section'}>
                    <div className="wrapper">
                        <div className="menu">
                            <div className="logo">
                                <a href='/#header'>
                                    <ExsolLogo  className='navbarLogo'/>
                                </a>
                            </div>
                            <div className="navigation">
                                <nav>
                                    <ul className="menu_Ul menu_UlB">
                                        <li><a href='/#about' className='effect-shine'>{Number(localStorage.getItem('setLanguage')) === 1 ? "ABOUT US" : Number(localStorage.getItem('setLanguage')) === 2 ? "Մեր մասին" :  Number(localStorage.getItem('setLanguage')) === 3 ? "ПРО НАС" : localStorage.getItem('setLanguage') === null ? "Մեր մասին" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#products' className='effect-shine'>{Number(localStorage.getItem('setLanguage')) === 1 ? "PRODUCTS" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԱՊՐԱՆՔՆԵՐ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "ТОВАРЫ" : localStorage.getItem('setLanguage') === null ? "ԱՊՐԱՆՔՆԵՐ" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#team_board' className='effect-shine'>{Number(localStorage.getItem('setLanguage')) === 1 ? "TEAM" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԹԻՄ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "КОМАНДА" : localStorage.getItem('setLanguage') === null ? "ԹԻՄ" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#media_blog' className='effect-shine'>{Number(localStorage.getItem('setLanguage')) === 1 ? "BLOG" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԲԼՈԳ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "БЛОГ" : localStorage.getItem('setLanguage') === null ? "ԲԼՈԳ" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#our_Partners' className='effect-shine'>{Number(localStorage.getItem('setLanguage')) === 1 ? "PARTNERS" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԳՈՐԾԸՆԿԵՐՆԵՐ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "ПАРТНЕРЫ" : localStorage.getItem('setLanguage') === null ? "ԳՈՐԾԸՆԿԵՐՆԵՐ" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#our_Partners' className='effect-shine'>{Number(localStorage.getItem('setLanguage')) === 1 ? "CONTACT US" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԿԱՊ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "СВЯЗАТЬСЯ" : localStorage.getItem('setLanguage') === null ? "Մեր մասին" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <div className='selectLang'>
                                            <div onClick={this.changeLanguageON} className='lengContainNer'>
                                                <p>
                                                {Number(localStorage.getItem('setLanguage')) === 1
                                                    ? 'ENG'
                                                    : Number(localStorage.getItem('setLanguage')) === 2
                                                    ? 'ՀԱՅ'
                                                    : Number(localStorage.getItem('setLanguage')) === 3
                                                    ? 'РУС'
                                                    : localStorage.getItem('setLanguage') === null
                                                    ? 'ՀԱՅ'
                                                    : Number(localStorage.getItem('setLanguage')) === 4}{' '}
                                                </p>
                                                <img src={arrow} className={this.state.changeLanguageActiv ? 'LengDropdown' : 'LengDropdownActive'} alt=''/>
                                            </div>
                                                <div className={this.state.changeLanguageActiv ? 'selectButtons' : 'selectButtonsActive' }>
                                                    <button onClick={this.changeLanguageArm}>ՀԱՅ</button>
                                                    <button onClick={this.changeLanguageRus}>РУС</button>
                                                    <button onClick={this.changeLanguageEng}>ENG</button>
                                                </div>
                                        </div>
                                    </ul>

                                </nav>
                                <div className="hamburger_Menu" onClick={() => this.setState({ hamburgerActiv: !this.state.hamburgerActiv })}>
                                    <div className={this.state.hamburgerActiv ? "change" : "container"}>
                                        <div className="bar1" ></div>
                                        <div className="bar2" ></div>
                                        <div className="bar3" ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.hamburgerActiv ? "hamburgerDiv" : "hamburgerDivActiv"} onClick={() => this.setState({ hamburgerActiv: !this.state.hamburgerActiv })}>
                    <div className='hamburgerBlok' onClick={(e) => { e.stopPropagation() }}>
                        <div className='mobileMenu'>
                            <div className='closeMenu'>
                                <div className={this.state.hamburgerActiv ? "change" : "container"} onClick={() => this.setState({ hamburgerActiv: !this.state.hamburgerActiv })}>
                                    <div className="bar1"></div>
                                    <div className="bar2"></div>
                                    <div className="bar3"></div>
                                </div>
                            </div>
                            <div className='hamburgerBlok_menu'>
                                <nav>
                                    <ul className="menu_Ul_mobile">
                                        <div className='mobileChangeLangContainer'>
                                            <button onClick={this.changeLanguageArm} className='mobileChangeLang'> ՀԱՅ </button>
                                            <button onClick={this.changeLanguageRus} className='mobileChangeLang'> РУС </button>
                                            <button onClick={this.changeLanguageEng} className='mobileChangeLang'> ENG </button>
                                        </div>
                                        <li><a href='/#about' className='btn btn-2'  onClick={() => this.setState({ hamburgerActiv: !this.state.hamburgerActiv })}>{Number(localStorage.getItem('setLanguage')) === 1 ? "ABOUT US" : Number(localStorage.getItem('setLanguage')) === 2 ? "Մեր մասին" :  Number(localStorage.getItem('setLanguage')) === 3 ? "ПРО НАС" : localStorage.getItem('setLanguage') === null ? "Մեր մասին" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#products' className='btn btn-2'  onClick={() => this.setState({ hamburgerActiv: !this.state.hamburgerActiv })}>{Number(localStorage.getItem('setLanguage')) === 1 ? "PRODUCTS" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԱՊՐԱՆՔՆԵՐ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "ТОВАРЫ" : localStorage.getItem('setLanguage') === null ? "ԱՊՐԱՆՔՆԵՐ" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#team_board' className='btn btn-2'  onClick={() => this.setState({ hamburgerActiv: !this.state.hamburgerActiv })}>{Number(localStorage.getItem('setLanguage')) === 1 ? "TEAM" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԹԻՄ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "КОМАНДА" : localStorage.getItem('setLanguage') === null ? "ԹԻՄ" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#media_blog' className='btn btn-2'  onClick={() => this.setState({ hamburgerActiv: !this.state.hamburgerActiv })}>{Number(localStorage.getItem('setLanguage')) === 1 ? "BLOG" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԲԼՈԳ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "БЛОГ" : localStorage.getItem('setLanguage') === null ? "ԲԼՈԳ" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#our_Partners' className='btn btn-2'  onClick={() => this.setState({ hamburgerActiv: !this.state.hamburgerActiv })}>{Number(localStorage.getItem('setLanguage')) === 1 ? "PARTNERS" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԳՈՐԾԸՆԿԵՐՆԵՐ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "ПАРТНЕРЫ" : localStorage.getItem('setLanguage') === null ? "ԳՈՐԾԸՆԿԵՐՆԵՐ" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                        <li><a href='/#our_Partners' className='btn btn-2'  onClick={() => this.setState({ hamburgerActiv: !this.state.hamburgerActiv })}>{Number(localStorage.getItem('setLanguage')) === 1 ? "CONTACT US" : Number(localStorage.getItem('setLanguage')) === 2 ? "ԿԱՊ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "СВЯЗАТЬСЯ" : localStorage.getItem('setLanguage') === null ? "Մեր մասին" : Number(localStorage.getItem('setLanguage')) === 4}</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className='exsolDiv'>
                            <ExsolLogo/>
                            <p>Limited Liability Company EXSOL Ltd</p>
                        </div>
                        <div className='lacationAndMail'>
                            <div className='locationDiv'>
                                <img src={menuImg1} alt=''></img>
                                <address>Domain Building, 102/104, Constitution street, MST 9055, Mosta, Yerevan.</address>
                            </div>
                            <div className='emailDiv'>
                                <img src={menuImg3} alt=''></img>
                                <a href='mailto:info@exsol.io' >info@exsol.io Online Support</a>
                            </div>
                            <div className='insetEmail_mobile'>
                                <input type='text' ref={navEmail}></input>
                                <img src={paperPlane} alt='' onClick={this.sendMassageNAV}/>
                            </div>
                            <div className='icons'>
                                <a href='https://www.linkedin.com/company/betting-solutions-llc/' target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinLogo} alt=''></img>
                                </a>
                                <a href='https://www.facebook.com/Betting-Solutions-LLC-374356069856869/' target="_blank" rel="noopener noreferrer">
                                    <img src={faceBookLogo} alt=''></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.productsMassige ? "productsMassigeDiv" : "productsMassigeDivActiv"} onClick={this.closeMassafeBlok}>
                    <div className='productMassige'>
                        <p>Your massage was successfully sent <br></br> Thank you  for your massege. Our agent will contact you</p>
                        <button className="blue_Button" onClick={this.closeMassafeBlok}>OK</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default onClickOutside(NavBar);