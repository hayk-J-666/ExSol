import React from 'react';
import './teamSlider.css'
import Team_item from './../team-item/Team-item'


import OWLcorusel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'


const optionsTeam = {
  responsive: {
      0: {
          items: 1,
      },
      600: {
          items: 2,
      },
      800: {
          items: 3,
      },
      1000: {
          items: 4,

      }
  },
};


function TeamSlider(props) {
    let teamCardsTextElement = props.teamCards.map((teamCard, index) => <Team_item name={teamCard.name} position={teamCard.position} knalwage={teamCard.knalwage} in={teamCard.in} face={teamCard.face} key={index} URLtop={teamCard.URLtop}  URLbottom={teamCard.URLbottom}/>)
  return (
      <OWLcorusel items='4' dots  autoplayHoverPause loop responsive={optionsTeam.responsive}>
        {teamCardsTextElement}
      </OWLcorusel>
  );
}

export default TeamSlider;
