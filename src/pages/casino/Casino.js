import React from 'react';
import './casino.css';
import titaleLineImg from './../../images/line.svg';
import Footer from './../../components/footer/Footer';


function Casino() {
        return (
            <>
                <section id='casino'>
                    <div className='titaleDiv   ' >
                        <div className='titaleLine'>
                            <h1  className="titales">
                                {Number(localStorage.getItem('setLanguage')) === 1 ? "Casino"
                                : Number(localStorage.getItem('setLanguage')) === 2 ? "Խաղատուն"
                                : Number(localStorage.getItem('setLanguage')) === 3 ? 'Казино'
                                : localStorage.getItem('setLanguage') === null ? "Խաղատուն" 
                                : Number(localStorage.getItem('setLanguage')) === 4}
                            </h1>
                            <img src={titaleLineImg} alt="" />
                        </div>
                        <p className="subtitle">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className='whiteSubTitle'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                    </div>
                    <div className='constructorTree'>
                        <div className='tree'></div>
                        <div className='branck1 branck'><div className="pulsating-circle"></div></div>
                        <div className='branck11 branckLev2'><div className="pulsating-circle"></div></div>
                        <div className='branck2 branck'><div className="pulsating-circle"></div></div>
                        <div className='branck22 branckLev2'><div className="pulsating-circle"></div></div>
                        <div className='branck3 branck'><div className="pulsating-circle"></div></div>
                        <div className='branck33 branckLev2'><div className="pulsating-circle"></div></div>
                        <div className='branck4 branck'><div className="pulsating-circle"></div></div>
                        <div className='branck44 branckLev2'><div className="pulsating-circle"></div></div>
                        <div className='branck5 branck'><div className="pulsating-circle"></div></div>
                        <div className='branck55 branckLev2'><div className="pulsating-circle"></div></div>
                        <div className='treeText1 treeText'>
                            <h4>Andar-Bahar</h4>
                            <p>Andar Bahar is a crazy simple card game which has become widely popular on Indian online casinos. The reason being is the easy rules, its availability through mobile phones and the fact you can easily win over a lakh in a single hand</p>
                        </div>
                        <div className='treeText2 treeText'>
                            <h4>Teen Patti</h4>
                            <p>Teen Patti is a popular Indian gambling card game just like poker. It is normally played in a group of 3 to 6 persons and uses a 52-card pack without jokers.</p>
                        </div>
                        <div className='treeText3 treeText'>
                            <h4>7up 7 Down</h4>
                            <p>This is a dice game where the host throws the dice and the players bet on 3 numbers - numbers below 7, 7 and numbers above 7. On numbers below and above 7 the players get double their stake and on 7 the players get 5 times their stake</p>
                        </div>
                        <div className='treeText4 treeText'>
                            <h4>Poker</h4>
                            <p>Poker is a mathematical game, and it’s a game of incomplete information. That may sound complicated, but it really isn't. On a very basic level, winning poker starts with the selection of which starting hands to play. </p>
                        </div>
                        <div className='treeText5 treeText'>
                            <h4>Dragon Tiger</h4>
                            <p> Dragon Tiger is beautifully simple, distinctly different and totally captivating. There’s no easier card game to play, but there’s so much to keep players engaged. The game is fast-paced (rounds take just 25 seconds), and it’s set in a stunning themed environment with light effects synchronised to game outcomes</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
}

export default Casino;