import React from 'react';
import {Link} from 'react-router';
// import quizBot from './quizBot.js';

import mediaQueries from '../common/mediaQueries.js';


class ReadTextPage extends React.Component {
       
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

      </div>  
      );
  }
}

export default ReadTextPage;


