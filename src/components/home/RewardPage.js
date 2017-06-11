import React from 'react';
import {Link} from 'react-router';
import quizBot from './quizBot.js';

import mediaQueries from '../common/mediaQueries.js';


class RewardPage extends React.Component {
       
  render() {
    return (
      <div> 
        <div className="chat_window">
          <div className="top_menu">
            <div className="title">You now have &nbsp;&nbsp;<img src={require("../../images/coin.png")} className="coinIcon" style={{width: "40px", height: "40px"}}/></div>
          </div>
          <div className="container">
            <div className="page-header">
                <h3 style={{margin: "15px", color: "#6a6f7d"}}>Pick your reward: </h3>
            </div>

            <div className="row grid-divider" style={{overflowY: "scroll", height: "373px"}}>
                <h3 style={{margin: "15px", color: "#6a6f7d"}}>Rewards</h3>
                <img src={require("../../images/shirt.png")} className="coinIcon" style={{height: "100px", margin: "0 15px 10px"}}/>
                <img src={require("../../images/lego.png")} className="coinIcon" style={{height: "100px", margin: "0 15px 10px"}}/>
                <img src={require("../../images/library.png")} className="coinIcon" style={{ height: "100px", margin: "0 10px"}}/>
                <img src={require("../../images/gift.png")} className="coinIcon" style={{ height: "100px", margin: "0 10px"}}/>    
            </div>
        </div>
      </div>
    </div>    
    );
  }
}

export default RewardPage;


