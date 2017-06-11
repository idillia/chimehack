import React from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import Test from './test.js';

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
              <div className="text-vcenter">
              </div>
            </div>
          </div>
        </div>

        <div id="solution" className="pad-section">
          <div className="container">
            <h2 className="text-center">Our solution</h2> <hr/>
            <div className="row text-center">
              We use awesome machine learning
            </div>
          </div>
        </div>

        <div id="ideas" className="pad-section">
          <div className="container">
            <h2 className="text-center">Our ideas even better</h2> <hr/>
            <div className="row text-center">
              We use awesome AI
            </div>
          </div>
        </div>

  
        <footer>
          <div className="container">
            <p className="text-right no-margin">Copyright &copy; Teachers Without Borders 2017</p>
          </div>
        </footer>

      </div>  
    );
  }
}

export default Radium(HomePage);


