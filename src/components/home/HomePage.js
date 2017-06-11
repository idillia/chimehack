import React from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import introBot from './introBot.js';

import mediaQueries from '../common/mediaQueries.js';


class HomePage extends React.Component {


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
    
    const hideOnPhone = {[mediaQueries.breakpointSmall]: {
        display: 'none'
      }
    };
    const hideOnBigScreen = {[mediaQueries.breakpointLarge]: {
        display: 'none'
      }
    };

    return (
      <div> 
        <div id="home" style={styles[mediaQueries.breakpointSmall].home}>
          <div className="tb">
            <div className="tb-cell">
              <div className="text-vcenter"><Link to="/intro"> <h1>Learn With AI</h1></Link>
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default Radium(HomePage);


