import React from 'react';
import './whExchange.css'
import titaleLineImg from './../../images/line.svg';
import Footer from './../../components/footer/Footer'
import advantage_img1 from './../../images/1.svg';
import advantage_img2 from './../../images/2.svg';
import advantage_img3 from './../../images/3.svg';
import exchangeLogo from './../../images/pic.svg'
import titalBlueLine from './../../images/line blue.svg'


class WhExchange extends React.Component {
    render() {
        return (
            <>
                <section id='whExchange'>
                    <img alt="" src={exchangeLogo} className='exchangelogo  '  />
                    <div className='titaleDiv   ' >
                        <div className='titaleLine'>
                            <h1 className="titales">
                                {Number(localStorage.getItem('setLanguage')) === 1 ? "What is Betting exchanges?"
                                : Number(localStorage.getItem('setLanguage')) === 2 ? "Ինչ է գրազի փոխանակումը՞"
                                : Number(localStorage.getItem('setLanguage')) === 3 ? 'Что такое биржи ставок?'
                                : localStorage.getItem('setLanguage') === null ? "Ինչ է գրազի փոխանակումը՞" 
                                : Number(localStorage.getItem('setLanguage')) === 4}
                            </h1>
                            <img src={titaleLineImg} alt="" />
                        </div>
                    </div>
                    <div className='exchangeText  ' >
                        <p>A betting exchange allows members to <span>bet against each other</span> rather than a bookmaker. Customers can offer odds to, or request odds from, fellow bettors.</p>
                        <p>Where traditional bookmakers risk going head-to-head with gamblers on markets, a betting exchange takes on <span>no risk </span>at all.</p>
                        <p>Instead, a betting exchange provides the platform for its customers to match bets against each other and takes a small commission on winnings.</p>
                        <p>Betting exchanges are becoming an increasingly integral part of the global gambling landscape, in many cases offering customers much better odds, more transparency, and an experience that feels intuitively fairer.</p>
                    </div>
                    <div className='WhyExchange  ' >
                        <div className='WhyExchange1'>
                            <div className='exchangeGrup'>
                                <img alt="" src={advantage_img1} />
                                <div className='exchangeTitalDiv'>
                                    <h3>How does a Betting Exchange work?</h3>
                                    <img alt="" src={titalBlueLine} className='blueLine' />
                                </div>
                            </div>
                            <p>The big difference with exchanges compared to bookmakers is they allow <span>lay betting.</span>  This means <span>backing a selection to lose</span> rather than win.</p>
                        </div>
                        <div className='WhyExchange2'>
                            <div className='exchangeGrup'>
                                <img alt="" src={advantage_img2} />
                                <div className='exchangeTitalDiv'>
                                    <h3>Why use a Betting Exchange?</h3>
                                    <img alt="" src={titalBlueLine} className='blueLine' />
                                </div>
                            </div>
                            <div className='WhyExchangeText'>
                                <p>There are many <span> benefits </span> to using an exchange instead of a bookmaker.</p>
                                <p>A betting exchange provides<span></span> greater choice for punters. Before, if a bookie wasn't willing to risk the odds or the stake you wanted, you simply couldn't have your bet. With an exchange, you only need to find another member willing to take on the risk, or in other words to lay your bet. Betting exchanges allow users to find odds and markets they want.</p>
                            </div>
                        </div>
                        <div className='WhyExchange3'>
                            <div className='howExchange  ' >
                                <div className='exchangeGrup'>
                                    <img src={advantage_img3} alt="" />
                                    <div className='exchangeTitalDiv'>
                                        <h3>How have betting exchanges changed betting?</h3>
                                        <img src={titalBlueLine} className='blueLine' alt="" />
                                    </div>
                                </div>
                                <div className='howExchangeText'>
                                    <p>Betting exchanges have been central to the <span>online betting revolution.</span></p>
                                    <p>Betfair was the first betting site to allow bettors to place lay bets, and that move re-shaped the sports betting industry. Many common features of online betting today would not exist without the betting exchange model.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

export default WhExchange;