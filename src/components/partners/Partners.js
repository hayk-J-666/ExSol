import React from 'react';
import './partners.css';
import Footer from '../../components/footer/Footer';
import titaleLineImg from './../../images/line.svg';
import  PartnersSlider from './../partnersSlider/PartnersSlider'
class Partners extends React.Component {

    constructor(props) {
        super(props);
        this.state = { slide: 0 };
        this.goLeft = this.goLeft.bind(this);
        this.goRight = this.goRight.bind(this);
        this.our_Partners = React.createRef();
    }

    goLeft() {
        let element = document.getElementById('scrollleftP');
        let compStyles = window.getComputedStyle(element);
        let windowWidth = window.innerWidth;

        let str = compStyles.getPropertyValue('width');
        let widthNumber = Math.round(Number(str.slice(0, -2)));
        if (windowWidth >= 1200) {
            element.scrollLeft = element.scrollLeft - 300;
        } else if (windowWidth < 1200 && windowWidth > 995) {
            element.scrollLeft = element.scrollLeft - (widthNumber / 3.33);
        } else if (windowWidth < 994 && windowWidth > 677) {
            element.scrollLeft = element.scrollLeft - (widthNumber / 2);
        } else {
            element.scrollLeft = element.scrollLeft - widthNumber;
        }
    }

    goRight() {
        let element = document.getElementById('scrollleftP');
        let compStyles = window.getComputedStyle(element);
        let windowWidth = window.innerWidth;

        let str = compStyles.getPropertyValue('width');
        let widthNumber = Math.round(Number(str.slice(0, -2)));
        if (windowWidth >= 1200) {
            element.scrollLeft = element.scrollLeft + 300;
        } else if (windowWidth < 1200 && windowWidth > 995) {
            element.scrollLeft = element.scrollLeft + (widthNumber / 3.33);
        } else if (windowWidth < 994 && windowWidth > 677) {
            element.scrollLeft = element.scrollLeft + (widthNumber / 2);
        } else {
            element.scrollLeft = element.scrollLeft + widthNumber;
        }
    }

    render() {
        return (
        <section className="our_Partners" id='our_Partners' ref={this.our_Partners} >
            <div className="wrapper" rel="preload" >
                <div className="big_our_Partners" >
                    <div className="our_Partners_div" >
                        <div className='titaleDiv'>
                            <h1 className="textShadow" >{Number(localStorage.getItem('setLanguage')) === 1 ? "Our Partners " : Number(localStorage.getItem('setLanguage')) === 2 ? "Մեր գործընկերները" :  Number(localStorage.getItem('setLanguage')) === 3 ? "Наши партнеры" : localStorage.getItem('setLanguage') === null ? "Մեր գործընկերները" : Number(localStorage.getItem('setLanguage')) === 4}</h1>
                            <div className='titaleLine'>
                                <h1 className="titales" >{Number(localStorage.getItem('setLanguage')) === 1 ? "Our Partners " : Number(localStorage.getItem('setLanguage')) === 2 ? "Մեր գործընկերները" :  Number(localStorage.getItem('setLanguage')) === 3 ? "Наши партнеры" : localStorage.getItem('setLanguage') === null ? "Մեր գործընկերները" : Number(localStorage.getItem('setLanguage')) === 4}</h1>
                                <img src={titaleLineImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <PartnersSlider/>
                </div> 
            </div>
            <Footer />
        </section>
        )
    }
}

export default Partners;