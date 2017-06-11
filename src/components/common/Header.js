import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  $(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });
  return (
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Teachers Without Borders</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse" style={{"height": "0px"}}>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#home">HOME</a></li>
                <li><a href="#solution">WHAT WE SOLVE</a></li>
                <li><a href="/learn">LEARN</a></li>
              </ul>
            </div>  
          </div>  
        </nav>

  );
} ;


export default Header;

// <li><a href="#ideas">IDEAS</a></li>

// <li><a href="#mindmap">MIND MAP</a></li>
