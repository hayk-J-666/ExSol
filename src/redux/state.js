import {rerenderEntireTree} from './../render';
import AniPhoto from '../images/exsol_portraits_ani_photo_2.png'
import ArtyomPhoto from '../images/exsol_portraits_artyom_photo_3.png'
import ArnoldPhoto from '../images/exsol_portraits_arnold_photo_3.png'
import AnnaPhoto from '../images/exsol_portraits_anna_photo_2.png'
import GagikPhoto from '../images/exsol_portraits_gagik_photo_2.png'
import GarnikPhoto from '../images/exsol_portraits_grno_photo_2.png'
import NarePhoto from '../images/exsol_portraits_nare_photo_2.png'
import HaykoPhoto from '../images/exsol_portraits_hayk_photo_2.png'

import AniPortrait from '../images/exsol_portraits_ani_3.png'
import ArtyomPortrait from '../images/exsol_portraits_artyom.png'
import ArnoldPortrait from '../images/exsol_portraits_arnold.png'
import AnnaPortrait from '../images/exsol_portraits_anna_3.png'
import GagikPortrait from '../images/exsol_portraits_gagik_3.png'
import GarnikPortrait from '../images/exsol_portraits_grno_3.png'
import NarePortrait from '../images/exsol_portraits_nare.png'
import HaykPortrait from '../images/exsol_portraits_hayk_3.png'

import CardCasino from '../images/card1.svg'
import CardExchange from '../images/card2.svg'
import CardWhitelabel from '../images/card3.svg'

import mediaCard1 from '../images/Group11.7(1).png'
import mediaCard2 from '../images/Group11.4.png'
import mediaCard3 from '../images/Group11.9.png'
import mediaCard4 from '../images/Group11.9.png'
import mediaCard5 from '../images/Group11.9.png'

let state = {
    mediaCards: [
        {id:1, tiv:1, image: mediaCard1, tital: 'Cross platform trading', text: 'Use our mobile application to trade on the go. A full featured platform with advanced charting tools provides ', dataTime: '01.01.2020' , content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        {id:2,tiv:2, image: mediaCard2, tital: 'The Exchange',text: 'Buy and sell during high volatility without skipping a beat! Just pre-set your order preferences & quickly get in and out of trades.', dataTime: '05.01.2020' , content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        {id:3,tiv:3, image: mediaCard3, tital: 'Powerful service', text: "We relentlessly focus on providing the best experience possible for developers. We do all the heavy-lifting in the background.", dataTime: '20.01.2020'  , content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        {id:4,tiv:4, image: mediaCard4, tital: 'Multi-Signature', text: 'Your Bitex wallet is secured using 3 keys. First key is stored with us, second key with our wallet partner and third is the recovery key.', dataTime: '08.02.2020'  , content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        {id:5,tiv:5, image: mediaCard5, tital: 'TEST TEST', text: 'Your Bitex wallet is secured using 3 keys. First key is stored with us, second key with our wallet partner and third is the recovery key.', dataTime: '08.02.2020'  , content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    ],

    teamCards: [
        {id:1, name: 'Gagik Papoyan',position: 'Project Manager', knalwage: 'Just Do It',  URLtop: GagikPhoto, URLbottom:GagikPortrait ,  URLbootm: '' , in: '#', face: '#'},
        {id:2, name: 'Anna Papazyan', position: 'HR', knalwage: 'Employees matter',  URLtop: AnnaPhoto, URLbottom: AnnaPortrait, in: '#', face: '#'},
        {id:3, name: 'Garnik Muradyan', position: 'QA', knalwage: 'Quality first' , URLtop: GarnikPhoto, URLbottom: GarnikPortrait, in: '#'},
        {id:4, name: 'Artyom Danielyan', position: 'SysAdmin', knalwage: 'All in One' ,  URLtop: ArtyomPhoto, URLbottom: ArtyomPortrait, in: 'https://www.linkedin.com/in/artyom-danielyan-077468168/', face: '#'},
        {id:5, name: 'Nare Arshakyan', position: 'Graphic Designer', knalwage: 'Imagination is solution' ,  URLtop: NarePhoto, URLbottom: NarePortrait, in: '#', face: '#'},
        {id:6, name: 'Ani Safaryan', position: 'UX/UI Designer', knalwage: 'Accessible. Affordable. Design' ,  URLtop: AniPhoto, URLbottom: AniPortrait, in: 'https://www.linkedin.com/in/ani-safaryan-39693211a/', face: 'https://www.facebook.com/AYevaMaria'},
        {id:7, name: 'Hayk Jinanyan', position: 'Front-End Developer', knalwage: 'Everything is Possible ',  URLtop: HaykoPhoto, URLbottom: HaykPortrait, in: 'https://www.linkedin.com/in/hayk-jinanyan-26a41a1a2/', face: '#'},
        {id:8, name: 'Arnold Aleksandryan', position: 'QA', knalwage: ' I Can Catch a Bug' ,  URLtop: ArnoldPhoto, URLbottom: ArnoldPortrait, in: 'https://www.linkedin.com/in/arnold-aleksandryan-a312b0197/', face: '#'},
    ],
    
    productsItems: [
        {id:1, name: 'White Label', Cardimg: CardExchange, text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.", link:  '/whiteLabel' },
        {id:2, name: 'Exchange API',Cardimg: CardWhitelabel , text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.", link:  '/exchange' },
        {id:3, name: 'Casino', Cardimg: CardCasino ,text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.", link:  '/casino' },
    ],
    mediaCardId : 1,
    mediaCardTital : "Cross platform trading",
    mediaCardContent : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    
}

export let rerender = () => {
    rerenderEntireTree(state);
}

export default state;