import React from 'react';
import './mediaBlog-item.css';
// import state from './../../../redux/state'
import { Link } from 'react-router-dom';

function  MediaBlogCard (props) {

   
    const addCardId = () => {
        localStorage.setItem('mediaId', props.id);
        localStorage.setItem('mediaTital', props.tital);
        localStorage.setItem('mediaContent', props.content);
    }


        return (
            <div className="media_card">
                <Link to='/mediaBlog' onClick={addCardId} ><img className="media_blog_image" alt='' src={props.image}/></Link>
                <div className="media_card_text_div">
                    <p className="media_card_titale" >{props.tital} </p>
                    <div className='dataAndText'>
                        <p className="media_card_data">{props.dataTime}</p>
                        <p className="media_card_text">{props.text}</p>
                    </div>
                </div>
            </div>
        )
    }



export default MediaBlogCard;