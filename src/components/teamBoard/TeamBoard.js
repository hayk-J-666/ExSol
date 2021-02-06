import React from 'react';
import TeamSlider from './../teamSlider/TeamSlider'
import titaleLineImg from './../../images/line.svg';
import './teamBoard.css';



function TeamBoard (props) {
        return(
            <section id="team_board" className={`team_board ${props.className}`}>
                <div className="wrapper">
                    <div className="big_team_board_div">
                        <div className="team_board_div">
                            <div className='titaleDiv   ' >
                                <h1 className="textShadow">Team board</h1>
                                <div className='titaleLine'>
                                    <h1 className="titales">Team board</h1>
                                    <img src={titaleLineImg} alt="" />
                                </div>
                            </div>
                            <p className="subtitle  " >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div className='teamSlider_container'>
                                <TeamSlider teamCards={props.teamCards}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }


export default TeamBoard;