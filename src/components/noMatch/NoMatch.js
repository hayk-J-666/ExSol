import React from 'react';
import './noMatch.css';
import { Link } from 'react-router-dom';

class NoMatch extends React.Component {
    render() {
        return (
            <>
            <section id='error-404'>
                <div className='error-404'>
                    <div className='error-404__number'>
                        <h2 className='number-404'>404</h2>
                        <h2 className='shadow404'>404</h2>
                    </div>
                    <h1>Opps! Page not found!</h1>
                    <Link to='/'><div className='backBtn error-btn'><button className="red_Button">GO BACK</button></div></Link>
                </div>
            </section>
            </>
        )
    
    }

}

export default NoMatch;