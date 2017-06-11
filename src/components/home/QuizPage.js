import React from 'react';
import {Link} from 'react-router';
import quizBot from './quizBot.js';

import mediaQueries from '../common/mediaQueries.js';


class QuizPage extends React.Component {
       
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
        </div><ul className="messages1"></ul>
        <div className="bottom_wrapper clearfix">
        <div className="message_input_wrapper">
        <input className="message_input1" placeholder="Type your message here..." /></div>
        <div className="send_message1">
        <div className="icon"></div><div className="text1">Send</div></div></div></div>
        <div className="message_template1">
        <li className="message1">
        <div className="avatar"></div>
        <div className="text_wrapper">
        <div className="text1"></div></div></li></div>
      </div>  
      );
  }
}

export default QuizPage;


