import React from 'react';
import './aboutUs.css';
import titaleLineImg from './../../images/line.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as AboutUsAnimation } from './../../images/forweb01.svg';
import frameX from './../../images/FrameX.svg'

class aboutUs extends React.Component {
    
    constructor(props) {
        super(props);
        this.anchorRef = React.createRef();
    }

    render() {
        return (
            <section className="about_Us" id='about' ref={this.anchorRef}>
                <img src={frameX} alt="" className='frameX_img'></img>
                <div className="about_Us_Div" >
                    <div className='titaleDiv' >
                        <h1 className="textShadow">{Number(localStorage.getItem('setLanguage')) === 1 ? "About us" : Number(localStorage.getItem('setLanguage')) === 2 ? "Մեր մասին" :  Number(localStorage.getItem('setLanguage')) === 3 ? "ПРО НАС" : localStorage.getItem('setLanguage') === null ? "Մեր մասին" : Number(localStorage.getItem('setLanguage')) === 4}</h1>
                        <div className='titaleLine'>
                            <h1 className="titales">{Number(localStorage.getItem('setLanguage')) === 1 ? "About us" : Number(localStorage.getItem('setLanguage')) === 2 ? "Մեր մասին" :  Number(localStorage.getItem('setLanguage')) === 3 ? "ПРО НАС" : localStorage.getItem('setLanguage') === null ? "Մեր մասին" : Number(localStorage.getItem('setLanguage')) === 4}</h1>
                            <img src={titaleLineImg} alt="" />
                        </div>
                    </div>
                    <div className="about_as_animation_Div " >
                        <p className="about_us_text">
                            {Number(localStorage.getItem('setLanguage')) === 1 ? "Exsol is a software solution provider for gaming businesses at any stage in their development and makes it easier entering the industry. Our in-house development team incorporates latest technologies to provide cutting-edge solutions. It offers an extensive range of products and services with complete management infrastructure." 
                            : Number(localStorage.getItem('setLanguage')) === 2 ? "Exsol- ը խաղային բիզնեսի համար ծրագրային լուծումների մատակարար է նրանց զարգացման ցանկացած փուլում և հեշտացնում է արդյունաբերություն մուտք գործելը: Ներքին զարգացման մեր թիմը ներառում է նորագույն տեխնոլոգիաներ `առաջատար լուծումներ ապահովելու համար: Այն առաջարկում է ապրանքների և ծառայությունների լայն տեսականի ՝ ամբողջական կառավարման ենթակառուցվածքներով:" 
                            : Number(localStorage.getItem('setLanguage')) === 3 ? "Exsol является поставщиком программных решений для игрового бизнеса на любом этапе его развития и облегчает его вхождение в отрасль. Наша собственная команда разработчиков использует новейшие технологии для обеспечения передовых решений. Он предлагает широкий спектр продуктов и услуг с полной инфраструктурой управления." 
                            : localStorage.getItem('setLanguage') === null ? "Exsol- ը խաղային բիզնեսի համար ծրագրային լուծումների մատակարար է նրանց զարգացման ցանկացած փուլում և հեշտացնում է արդյունաբերություն մուտք գործելը: Ներքին զարգացման մեր թիմը ներառում է նորագույն տեխնոլոգիաներ `առաջատար լուծումներ ապահովելու համար: Այն առաջարկում է ապրանքների և ծառայությունների լայն տեսականի ՝ ամբողջական կառավարման ենթակառուցվածքներով:"
                            : Number(localStorage.getItem('setLanguage')) === 4}
                        </p>
                        <Link to='/aboutus' ><div className='backBtn'><button className="red_Button">{Number(localStorage.getItem('setLanguage')) === 1 ? "Read more" : Number(localStorage.getItem('setLanguage')) === 2 ? "Կարդալ ավելին" :  Number(localStorage.getItem('setLanguage')) === 3 ? "Читать далее" : localStorage.getItem('setLanguage') === null ? "Կարդալ ավելին" : Number(localStorage.getItem('setLanguage')) === 4}</button></div></Link>
                    </div>
                </div>
                <div className='about_us_animation_Div  '   data-wow-delay='.33s' data-wow-offset="300">
                    <AboutUsAnimation  className='about_us_animation'/>
                </div>
            </section>
        )
    }
}

export default aboutUs;