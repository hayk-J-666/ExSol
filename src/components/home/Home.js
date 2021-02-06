import React from 'react';
import './home.css';
import AnimationComponent from './AnimationComponent'
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
    }

    click = (e) => {
        e.stopPropagation()
    }

    playVideo = () => {
        this.setState({ homeVideo: !this.state.homeVideo })
    }

    pauseVideo = () => {
        this.setState({ homeVideo: !this.state.homeVideo })
        this.setState({ playing: false })
        alert(this.state.playing)
    }

    render() {
        return (
            <section itemScope itemType="http://exsol.io/aboutus" id="header" rel="preload" className={`header ${this.props.className}`}>
                <div className='homePage' rel="preload">
                    <div className='wrapper ' rel="preload">
                        <section className="header_Div animationTime  " rel="preload">
                            <div className='animationBox' rel="preload">
                                <AnimationComponent />
                            </div>
                            <div className='header_Div__text'>
                                <h1 className="titalesHome">{Number(localStorage.getItem('setLanguage')) === 1 ? "Betting exchange" : Number(localStorage.getItem('setLanguage')) === 2 ? "Խաղադրույքների փոխանակում" :  Number(localStorage.getItem('setLanguage')) === 3 ? "Обмен ставками" : localStorage.getItem('setLanguage') === null ? "Խաղադրույքների փոխանակում" : Number(localStorage.getItem('setLanguage')) === 4}</h1>
                                <p className="offer_text">{Number(localStorage.getItem('setLanguage')) === 1 ? "offer the opportunity for anyone to both back and lay" : Number(localStorage.getItem('setLanguage')) === 2 ? "Խաղադրույքների փոխանակում" :  Number(localStorage.getItem('setLanguage')) === 3 ? "Обмен ставками" : localStorage.getItem('setLanguage') === null ? "Խաղադրույքների փոխանակում" : Number(localStorage.getItem('setLanguage')) === 4}</p>
                                <div className="header_Buttons">
                                    <div className='backBtn'>
                                        <Link to='/WhExchange'>
                                            <button className="blue_Button">
                                            {Number(localStorage.getItem('setLanguage')) === 1 ? "WHAT IS EXCHANGE?" : Number(localStorage.getItem('setLanguage')) === 2 ? "Ինչ՞ է EXCHANGE?" :  Number(localStorage.getItem('setLanguage')) === 3 ? "Что такое EXCHANGE?" : localStorage.getItem('setLanguage') === null ? "Ինչ՞ է EXCHANGE?" : Number(localStorage.getItem('setLanguage')) === 4}
                                                </button>
                                        </Link>
                                    </div>
                                    <div className='backBtn'>
                                        <a href="https://www.youtube.com/watch?v=Ma8DmYYCJT8" target="_blank" rel="noopener noreferrer" >
                                            <button className="red_Button">{Number(localStorage.getItem('setLanguage')) === 1 ? "WATCH VIDEO " : Number(localStorage.getItem('setLanguage')) === 2 ? "ԴԻՏԵԼ ՎԻԴԵՈՆ" :  Number(localStorage.getItem('setLanguage')) === 3 ? "СМОТРЕТЬ ВИДЕО" : localStorage.getItem('setLanguage') === null ? "ԴԻՏԵԼ ՎԻԴԵՈՆ" : Number(localStorage.getItem('setLanguage')) === 4}</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;