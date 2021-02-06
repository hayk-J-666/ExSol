import React from 'react';
import './about_us_component.css';
import advantage_img1 from './../../images/1.svg';
import advantage_img2 from './../../images/2.svg';
import advantage_img3 from './../../images/3.svg';
import advantage_img4 from './../../images/4.svg';
import advantage_img5 from './../../images/5.svg';
import advantage_img6 from './../../images/6.svg';
import advantage_img7 from './../../images/7.svg';
import advantage_img8 from './../../images/8.svg';
import advantage_img9 from './../../images/9.svg';
import titaleLineImg from './../../images/line.svg';
import aboutUsBackground from './../../images/aboutUsBack.svg';
import TeamSlider from './../../components/teamSlider/TeamSlider'
import Footer from './../../components/footer/Footer';

function About_us_component (props) {
        return (
            <>
                    <img src={aboutUsBackground} className='aboutUsBackground' alt=''/>
                <div className='about_Us_wrapper about_Us_component_big_div' id='about_Us_wrapper'>
                    <div className="about_Us_Div">
                        <div className='titaleDiv'>
                            <h1 className="textShadow">
                                {Number(localStorage.getItem('setLanguage')) === 1 ? "Who we are"
                                : Number(localStorage.getItem('setLanguage')) === 2 ? "Ով ենք մենք՞"
                                : Number(localStorage.getItem('setLanguage')) === 3 ? 'Кто мы?'
                                : localStorage.getItem('setLanguage') === null ? "Ով ենք մենք՞" 
                                : Number(localStorage.getItem('setLanguage')) === 4}
                            </h1>
                            <div className='titaleLine'>
                                <h1 className="titales">
                                    {Number(localStorage.getItem('setLanguage')) === 1 ? "Who we are"
                                    : Number(localStorage.getItem('setLanguage')) === 2 ? "Ով ենք մենք՞"
                                    : Number(localStorage.getItem('setLanguage')) === 3 ? 'Кто мы?'
                                    : localStorage.getItem('setLanguage') === null ? "Ով ենք մենք՞" 
                                    : Number(localStorage.getItem('setLanguage')) === 4}
                                </h1>
                                <img src={titaleLineImg} alt="" />
                            </div>
                        </div>
                        <p className='subtitle_About_Us' >At Exsol we are in the process of creating client-oriented software which is a mixture of technical excellence and smart communication skills, and our firm hires only the very best to ensure you receive both. We know that every client is unique and we strive to deliver an individual, innovative and affordable proposal every time and to follow it through with an outstanding delivery which is both on time and within budget.</p>
                        <div className='titaleDiv'>
                            <div className='titaleLine'>
                                <h2 className="serviceListTitle">Services</h2>
                                <img src={titaleLineImg} alt="" />
                            </div>
                            <p className='subtitle_About_Us'>We thrive to continuously extend our list of provided services. Some of them are listed below and we are flexible in providing custom services as per the client needs:</p>
                        </div>
                        <div className='advantages'>
                            <div className='advantage'  >
                                <img src={advantage_img1} alt='' className='advantage_img'></img>
                                <div className='advantage_text'>
                                    <h1>White-label service</h1>
                                </div>
                            </div>
                            <div className='advantage'>
                                <img src={advantage_img2} alt='' className='advantage_img'></img>
                                <div className='advantage_text'>
                                    <h1>Custom Development Services</h1>
                                </div>
                            </div>
                            <div className='advantage' >
                                <img src={advantage_img3} alt='' className='advantage_img'></img>
                                <div className='advantage_text'>
                                    <h1>Betfair Integration</h1>
                                </div>
                            </div>
                            <div className='advantage'  >
                                <img src={advantage_img4} alt='' className='advantage_img'></img>
                                <div className='advantage_text'>
                                    <h1>Front-end customization service</h1>
                                </div>
                            </div>
                            <div className='advantage'>
                                <img src={advantage_img5} alt='' className='advantage_img'></img>
                                <div className='advantage_text'>
                                    <h1>Customer Relationship Management service</h1>
                                </div>
                            </div>
                            <div className='advantage' >
                                <img src={advantage_img6} alt='' className='advantage_img'></img>
                                <div className='advantage_text'>
                                    <h1>24/7 Multi-lingual Support Live Chat, Phone, Email</h1>
                                </div>
                            </div>
                            <div className='advantage'  >
                                <img src={advantage_img7} alt='' className='advantage_img'></img>
                                <div className='advantage_text'>
                                    <h1>Portfolio Reporting Via email</h1>
                                </div>
                            </div>
                            <div className='advantage'>
                                <img src={advantage_img8} alt='' className='advantage_img'></img>
                                <div className='advantage_text'>
                                    <h1>Casino setup service Own or our premises</h1>
                                </div>
                            </div>
                            <div className='advantage' >
                                <img src={advantage_img9} alt='' className='advantage_img'></img>
                                <div className='advantage_text'>
                                    <h1>Multiple Payment Options</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='teamSlider_container'>
                        <TeamSlider teamCards={props.teamCards}/>
                    </div>

                    {/* <TeamBoardDiv teamCards={this.props.teamCards} /> */}
                </div>
                <Footer />
            </>
        )
    }


export default About_us_component;