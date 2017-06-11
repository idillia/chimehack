import React from 'react';
import {Link} from 'react-router';
import quizBot from './quizBot.js';

import mediaQueries from '../common/mediaQueries.js';


class CurriculumPage extends React.Component {
       
  render() {
    return (
      <div> 
        <div className="chat_window">
          <div className="top_menu" style={{padding:"58px 0 0px"}}>
            <div className="title">You now have &nbsp;&nbsp;<img src={require("../../images/coin15.png")} className="coinIcon" style={{width: "40px", height: "40px", margin:"7px -9px 20px"}}/></div>
          </div>
          <div className="container">
            <div className="page-header">
                <h3 style={{margin: "15px", color: "#6a6f7d"}}>Pick your reward: </h3>
            </div>

            <div className="row grid-divider" style={{overflowY: "scroll", height: "373px"}}>
               
               
                <img src={require("../../images/shirt.png")} className="coinIcon" style={{height: "100px", width: "100px", margin: "9px 33px 10px", position: "relative"}}/>
                <img src={require("../../images/coin30.png")} className="coinIcon" style={{height: "33px", margin: "78px -54px 8px", position: "absolute"}}/>

                <img src={require("../../images/lego.png")} className="coinIcon" style={{height: "100px", width:"100px", margin: "0 15px 10px", position: "relative"}}/>
                 <img src={require("../../images/coin15.png")} className="coinIcon" style={{height: "33px", margin: "78px -31px 10px", position: "absolute"}}/>
                 <br />
                <img src={require("../../images/library.png")} className="coinIcon" style={{ height: "100px", margin: "12px 34px", position: "relative"}}/>
                 <img src={require("../../images/coin10.png")} className="coinIcon" style={{height: "33px", margin: "70px -46px 8px", position: "absolute"}}/>

                <img src={require("../../images/gift.png")} className="coinIcon" style={{ height: "100px", margin: "0 10px", position:"relative"}}/>    
                 <img src={require("../../images/coin15.png")} className="coinIcon" style={{height: "33px", margin: "70px -32px 8px", position: "absolute"}}/>
            </div>
        </div>
      </div>
    </div>    
    );
  }
}

export default CurriculumPage;