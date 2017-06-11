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
              <div className="page-header">
                <h3 style={{margin: "15px", color: "#6a6f7d"}}>Your current progress: </h3>
              </div>
              <div className="w3-light-grey">
                <div className="w3-container w3-green w3-center" style={{width:"80%"}}>Arabic 90%</div>
              </div>
              <br/>

              <div className="w3-light-grey">
                <div className="w3-container w3-red w3-center" style={{width:"50%"}}>Lebanese 40%</div>
              </div>
              <br/>

              <div className="w3-light-grey">
                <div className="w3-container w3-blue" style={{width:"38%", backgroundColor: "#c0392b!important"}}>English 15%</div>
              </div>
              <br/>
              <div className="w3-light-grey">
                <div className="w3-container w3-blue" style={{width:"47%",  backgroundColor: "#9b59b6!important"}}>Science 40%</div>
              </div>
              <br/>

              <div className="w3-light-grey">
                <div className="w3-container w3-blue" style={{width:"65%"}}>Math 50%</div>
              </div>
              <br/>

            </div>
            </div>
          </div>
      </div>  
    );
  }
}

export default ProgressPage;


