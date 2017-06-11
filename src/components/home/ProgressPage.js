import React from 'react';
import {Link} from 'react-router';



class ProgressPage extends React.Component {
    render() {


    return (
      <div> 
        <div className="chat_window">
          <div className="container">

            <div className="container">

              <link rel="stylesheet" type="text/css" href="https://www.w3schools.com/w3css/4/w3.css"/>
              <div className="page-header" style={{margin: "73px 0 20px"}}>
                <h3 style={{margin: "15px", color: "#6a6f7d"}}>Your current progress: </h3>
              </div>
              <div className="w3-light-grey">
                <div style={{width:"80%", backgroundColor: "#3498db", color: "white"}}> Arabic 90%</div>
              </div>
              <br/>

              <div className="w3-light-grey">
                <div  style={{width:"50%", backgroundColor:"#d35400", color: "white"}}> &nbsp;Lebanese 40%</div>
              </div>
              <br/>

              <div className="w3-light-grey">
                <div  style={{width:"32%", backgroundColor: "#e74c3c", color: "white"}}> &nbsp;English 15%</div>
              </div>
              <br/>
              <div className="w3-light-grey">
                <div  style={{width:"50%",  backgroundColor: "#f39c12", color: "white"}}>&nbsp; Science 40%</div>
              </div>
              <br/>

              <div className="w3-light-grey">
                <div style={{width:"65%", backgroundColor: "#2980b9", color: "white"}}> &nbsp;Math 50%</div>
              </div>
              <br/>

              <div className="container">

            <div className="well well-sm text-center">        
        
              <div className="" data-toggle="buttons">
              <a href="rewards" target="_self">
                 <label className="btn btn-lg btn-success active">
                    
                    <i className="fa fa-check"></i> Rewards
                </label>
              </a>
              </div>
              </div>
              </div>

            </div>
            </div>
          </div>
      </div>  
    );
  }
}

export default ProgressPage;


