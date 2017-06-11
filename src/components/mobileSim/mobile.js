import React, {PropTypes} from 'react';

class Phr extends React.Component {


  render() {
    // const pos = {widht:"auto", height:"auto", "max-height":"100%", "max-width": "100%"};
    return (
      <div className="iphone-sim">
        <div className="img-container">
          <div className="positioning">
            <object data="https://phr.firebaseapp.com/#/login" width="320" height="472">
              <embed src="http://phr.firebaseapp.com/#/login" width="400" height="600"></embed>
            </object>
          </div>  
          <img src={require("./../../images/iphone-cutout.png")} width="370px" height="650px" />
        </div>
      </div>
    );
  }
}

export default Phr;

