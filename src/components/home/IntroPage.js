import React from 'react';
import {Link} from 'react-router';
// import Radium from 'radium';
import introBot from './introBot.js';

import mediaQueries from '../common/mediaQueries.js';


class IntroPage extends React.Component {


    render() {
    const bulbImg = require("./../../images/bulb_right_cut_down.jpg");
    const worldmapImg = require("./../../images/worldmap_west.jpg");
    
    const divStyle = {overflow: 'hidden', 'marginBottom': '5px', border: "5px solid white"};

     const styles = {
        [mediaQueries.breakpointSmall]: {
          idea: {
            'backgroundImages': "url(" + bulbImg + ")",
            'backgroundSize': 'cover'
          },
          home: {
          }
      }
    };

    return (
      <div> 
<div className="chat_window">
<div className="top_menu">
<div className="buttons">
<div className="button close"></div>
<div className="button minimize"></div>
<div className="button maximize"></div>
</div>
<div className="title">Teacher Assistant AI (TAAI)</div>
</div><ul className="messages"></ul>
<div className="bottom_wrapper clearfix">
<div className="message_input_wrapper">
<input className="message_input" placeholder="Type your message here..." /></div>
<div className="send_message">
<div className="icon"></div><div className="text">Send</div></div></div></div>
<div className="message_template">
<li className="message">
<div className="avatar">
  <img src={require("./../../images/dora.png")}  className="icon1" width="60" height="60"></img>
</div>
<div className="text_wrapper">
<div className="text"></div></div></li></div>
      </div>  
    );
  }
}

export default IntroPage;


