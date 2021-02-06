import React from 'react';
import './team-item.css'
import faceIcon  from '../../../src/images/facebook1.svg';
import faceIconBlack from '../../../src/images/vectorBlack.svg';
import inIcon  from '../../../src/images/groupIN.svg';
import inIconBlack from '../../../src/images/vector2Black.svg';
import imgCircle from "../../../src/images/FrameCircle.png";

function Team_item(props) {
  return (
    <div className="team_card"     data-wow-delay='.33s' >
        <div className='bigCardText'>
            <div className='circleImgDiv'>
                <div className='circleImg'>
                    <figure></figure>
                    <div className='team_img'  style={{backgroundImage:"url("+ props.URLtop + ") " }}></div>
                    <div className='team_img_ART'  style={{backgroundImage:"url("+ props.URLbottom +") " }}></div>
                </div>
                    <img src={imgCircle} alt="" className='imgCircle'></img>
            </div>
            <p className="employee_name">{props.name}</p>
            <p className="ceo">{props.position}</p>
            <p className="description">{props.knalwage}</p>
            <div className="employee_Contacts">
                <div className="employee_iconse">
                    <a href={props.face} target="_blank" rel="noopener noreferrer">
                        <img alt="" src={faceIcon} className='icon'/>
                        <img alt="" src={faceIconBlack} className='iconBlack'/>
                    </a>
                </div>
                <div className="employee_iconse">
                    <a  href={props.in} target="_blank" rel="noopener noreferrer">
                        <img alt="" src={inIcon} className='icon'/>
                        <img alt="" src={inIconBlack} className='iconBlack'/>
                    </a>
                </div>
            </div>
        </div> 
    </div>      
  );
}

export default Team_item;
