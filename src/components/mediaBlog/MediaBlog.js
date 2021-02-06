import React, { useState, useEffect } from 'react';
import Paginator from 'react-hooks-paginator';
import  fetchData  from 'data-fetcher';

import './mediaBlog.css';
import titaleLineImg from './../../images/line.svg';
import MediaBlog_item from '../mediaBlog-item/mediaBlog-item';

// TODO: tital -> title

const MediaBlog = (props) => {
    const pageLimit = 4;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [data ,setData] = useState([]);
    const [currentData, setCurrentData] = useState([]);

    
    let mediaCardElementRevers = props.mediaCards.map((mediaCard) => <MediaBlog_item rel="preload" tital={mediaCard.tital} text={mediaCard.text} id={mediaCard.id} dataTime={mediaCard.dataTime} content={mediaCard.content}  image={mediaCard.image} key={mediaCard.id}/>);
    let mediaCardElement = mediaCardElementRevers.reverse()
    useEffect(() => {
        fetchData().then(mediaCardElement => setData(mediaCardElement));
    }, []);

    useEffect(() => {
        setCurrentData(mediaCardElement.slice(offset, offset + pageLimit));
    }, [offset, data]);

       let media = React.createRef();

    return (
        <section className="media_Blog" id='media_blog' ref={media}>
            <div className="wrapper">
                <div className="big_Media_Blog_div">
                    <div className="media_Blog_div">
                        <div className='titaleDiv   ' >
                            <h1 className="textShadow">Media Blog</h1>
                            <div className='titaleLine'>
                                <h1 className="titales">Media Blog</h1>
                                <img src={titaleLineImg} alt="" />
                            </div>
                        </div>
                        <p className="subtitle">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className="media_blog_cards">
                                    {currentData.map(mediaCardElement => (
                                    <>{mediaCardElement}</>
                                    ))}
                        </div>
                            <Paginator
                                totalRecords={mediaCardElement.length}
                                pageLimit={pageLimit}
                                pageNeighbours={1}
                                setOffset={setOffset}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MediaBlog;