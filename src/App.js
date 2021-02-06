import React from 'react';
import Navbar from './components/navBar/NavBar';
import AboutUsComponent from './pages/about_us_component/About_us_component';
import Exchange from './pages/exchang/Exchange';
import MediaComponent from './pages/mediaBlog_component/MediaBlog_component';
import AllPage from './pages/allPage/AllPage';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import WhExchange from './pages/whExchange/WhExchange';
import Casino from './pages/casino/Casino';
import WhiteLabel from './pages/whiteLabel/WhiteLabel';
import NoMatch from './components/noMatch/NoMatch'
import './App.css'
import {Route, BrowserRouter, Switch} from 'react-router-dom';

function  App (props) {
    return (
      <BrowserRouter>
          <div className='page' id='page'>
            <Navbar rel="preload" rerender={props.rerender}/>
              <div id='routerContent'>
                <ScrollToTop/>
                <Switch>
                  <Route path='/aboutus' render ={ () => <AboutUsComponent teamCards={props.state.teamCards} rel="preload"/>}></Route>
                  <Route path='/exchange' render ={ () => <Exchange rel="preload"/>}></Route>
                  <Route path='/whExchange' render ={ () => <WhExchange rel="preload"/>}></Route>
                  <Route path='/whiteLabel' render ={ () => <WhiteLabel rel="preload"/>}></Route>
                  <Route path='/casino' render ={ () => <Casino rel="preload"/>}></Route>
                  <Route path='/mediaBlog' render ={ () => <MediaComponent rel="preload" mediaCards={props.state.mediaCards} key={props.state.mediaCards.id} id={props.state.mediaCardId} tital={props.state.mediaCardTital} content={props.state.mediaCardContent} image={props.state.mediaCardImage}/>}></Route>
                  <Route exact path='/' render ={ () => <AllPage rel="preload" mediaCards={props.state.mediaCards} teamCards={props.state.teamCards} productsItems={props.state.productsItems} key={props.state.teamCards.id}  />}></Route>
                  <Route component ={NoMatch}/>
                </Switch>
              </div>
          </div>
      </BrowserRouter>
    );
}
export default App;