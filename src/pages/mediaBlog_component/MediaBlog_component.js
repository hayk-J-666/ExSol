import React from 'react';
import Footer from './../../components/footer/Footer';
import titaleLineImg from './../../images/line.svg';
import './mediaBlog_component.css';
import mediaImg from './../../images/Frame.png';


class MediaBlog_component extends React.Component {
    render() {
        
        return (<>
            
            <section className='media_blog_component'>
                <div className='media_blog_div wrapper'>
                    <div>
                        <div className='media_blog_content'>
                            <div className='media_blog_text  ' >
                                <div className='titaleDiv ' >
                                    <div className='titaleLine'>
                                        <h1 className="titales">{localStorage.getItem('mediaTital')}</h1>
                                        <img src={titaleLineImg} alt="" />
                                    </div>
                                </div>
                                <p>{ localStorage.getItem('mediaContent')}</p>
                            </div>
                            <div className='media_blog_img'>
                                <img src={mediaImg} alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
        )
    }
}

export default MediaBlog_component;