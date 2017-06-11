import React from 'react';
import {Link} from 'react-router';
import Radium from 'radium';

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
                <h1>Mila Antonova</h1>
                <div className="header-social">
                  <ul>
                  <li><a href="https://github.com/idillia"><i className="fa fa-github"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/milaantonova"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="mailto:mila.antonova@gmail.com"><i className="fa fa-envelope-o"></i></a></li>
                  <li><a href="blog"><i className="fa fa-pencil"></i></a></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="projects" className="pad-section">
          <div className="container">
            <h2 className="text-center">Projects & Apps</h2> <hr/>
            <div className="row text-center">
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon"><img src={require("./../../images/kyeezee.png")}/></i>
                <h4>Burma Bell Clock</h4>
                <p>Alows to set time via mobile app and when the time is right mallet will hit the bell. 
                  <a target="_blank" href="http://milapg.com/blog/burmese-bell-alarm-clock/"> More...</a>
                </p>
              </div>
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon"><img src={require("./../../images/doorbell_res.png")}/></i>
                <h4>Wireless Door Bell</h4>
                <p>Bell attaches to the door from the inside. Piezo sensor can detect the knock and play a sound.
                  <a target="_blank" href="http://milapg.com/blog/wireless-door-bell/"> More...</a>
                </p>
              </div>
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon"><img src={require("./../../images/phr.png")}/></i>
                <h4>Poker Hand Recorder</h4>
                <p>App that allows to record and share poker hands.
                  <a target="_blank" href="http://milapg.com/phr"></a>
                </p>  
              </div>
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon"><img src={require("./../../images/ebo.png")}/></i>
                <h4>Easy Bridge Online</h4>
                <p>Platform to learn Contract Bridge.
                  <a target="_blank" href="http://easybridgeonline.com/"> More...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="ideas" className="pad-section" style={styles[mediaQueries.breakpointSmall].idea}>
          <div className="container">
            <h2 className="text-center">Ideas</h2> <hr/>
          </div>  
          <div className="container">
            <div className="row">
              <div className="col-sm-10">

                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true" style={hideOnBigScreen}>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <span className="icon-float-left"><i className="fa fa-lightbulb-o"></i></span>
                          HEALTH
                          <span className="icon-float-right"><i className="fa fa-caret-square-o-down" aria-hidden="true"></i></span>
                        </a>
                      </h4>

                    </div>
                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body color">
                      <ul>
                        <li><i className="fa fa-lightbulb-o icon-float-left"></i>3D printed customize shoes or inserts to correct posture</li>
                        <li><i className="fa fa-lightbulb-o icon-float-left"></i>Device that records puls, breathing, muscle tension to monitors user's arousal</li>
                        <li><i className="fa fa-lightbulb-o icon-float-left"></i>Sleeping pillow like a dome</li>
                        <li><i className="fa fa-lightbulb-o icon-float-left"></i>Bed that can rock, and help to switch positions and right time</li>
                        <li><i className="fa fa-lightbulb-o icon-float-left"></i>Special belt that pulls sholder back, helps to spread front of the body</li>
                      </ul> 
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span className="icon-float-left"><i className="fa fa-lightbulb-o"></i></span>
                        GAMES & ENTERTAIMENT
                        <span className="icon-float-right"><i className="fa fa-caret-square-o-down" aria-hidden="true"></i></span>
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                      <ul>
                        <li><i className="fa fa-lightbulb-o icon-float-left"></i>AR/VR role playing time traveling game to learn historical events</li>
                        <li><i className="fa fa-lightbulb-o icon-float-left"></i>App that allows to quickly "try" any cloths on a user's 3D avatar. Provides commutiny of fashion style freelances who recommend to user what type of cloths would be a good fit</li>
                        <li><i className="fa fa-lightbulb-o icon-float-left"></i>Game set: case of plastic bottles in special form and game instractions</li>
                      </ul> 
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span className="icon-float-left"><i className="fa fa-lightbulb-o"></i></span>
                          OTHER
                        <span className="icon-float-right"><i className="fa fa-caret-square-o-down" aria-hidden="true"></i></span>
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                      <div className="panel-body">  
                      <ul>
                        <li><i className="fa fa-lightbulb-o icon-float-left"></i>Small meetup where we can play with latest gadgets</li>
                      </ul> 
                      </div>
                    </div>
                  </div> 
                </div>

                <div className="list-group color-white" style={hideOnPhone}>
                  <h5 className="list-group-item-heading">
                    HEALTH
                  </h5>
                  <div className="list-group-item-text">
                    <ul>
                      <li><i className="fa fa-lightbulb-o icon-float-left"></i>3D printed customize shoes or inserts to correct posture</li>
                      <li><i className="fa fa-lightbulb-o icon-float-left"></i>Device that records puls, breathing, muscle tension to monitors user's arousal</li>
                      <li><i className="fa fa-lightbulb-o icon-float-left"></i>Sleeping pillow like a dome</li>
                      <li><i className="fa fa-lightbulb-o icon-float-left"></i>Bed that can rock, and help to switch positions and right time</li>
                      <li><i className="fa fa-lightbulb-o icon-float-left"></i>Special belt that pulls sholder back, helps to spread front of the body</li>
                    </ul> 
                  </div>

                  <h5 className="list-group-item-heading">
                      GAMES & ENTERTAIMENT
                  </h5>
                  <div className="list-group-item-text"> 
                    <ul>
                      <li><i className="fa fa-lightbulb-o icon-float-left"></i>AR/VR role playing time traveling game to learn historical events</li>
                      <li><i className="fa fa-lightbulb-o icon-float-left"></i>App that allows to quickly "try" any cloths on a user's 3D avatar. Provides commutiny of fashion style freelances who recommend to user what type of cloths would be a good fit</li>
                      <li><i className="fa fa-lightbulb-o icon-float-left"></i>Game set: case of plastic bottles in special form and game instractions</li>
                    </ul> 
                  </div>
                  <h5 className="list-group-item-heading">
                    OTHER
                  </h5>
                  <div className="list-group-item-text"> 
                    <ul>
                      <li><i className="fa fa-lightbulb-o icon-float-left"></i>Small meetup where we can play with latest gadgets</li>
                    </ul> 
                  </div>  
                </div> 
              </div>
            </div> 
          </div>
        </div>

        <div id="mindmap" className="pad-section">
          <div className="container">
            <h2 className="text-center">Mind Map</h2> <hr />
          </div> 
          <div className="container">
            <div className="row">
              <div className="col-sm- text-center" style={hideOnBigScreen}>
                <p className="lead">
                  <iframe width="350" height="400" frameBorder="0" src="https://www.mindmeister.com/maps/public_map_shell/424354541/mila?width=350&height=340&z=auto&scrollbars=1&presentation=1" scrolling="no" style={divStyle}>Your browser is not able to display frames. Please visit <a href="https://www.mindmeister.com/424354541/mila" target="_blank">Mila</a> on MindMeister.</iframe>
                </p>
              </div>
              <div className="col-sm-12 text-center" style={hideOnPhone}>
                <p className="lead">
                  <iframe width="600" height="400" frameBorder="0" src="https://www.mindmeister.com/maps/public_map_shell/424354541/mila?width=600&height=600&z=auto&scrollbars=1&presentation=1" scrolling="no" style={divStyle}>Your browser is not able to display frames. Please visit <a href="https://www.mindmeister.com/424354541/mila" target="_blank">Mila</a> on MindMeister.</iframe>
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <footer>
          <div className="container">
            <p className="text-right no-margin">Copyright &copy; Mila Antonova 2016</p>
          </div>
        </footer>

      </div>  
    );
  }
}

export default Radium(HomePage);


