/* eslint-disable import/default */
import React from 'react';
import 'babel-polyfill';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import introBot from './components/home/introBot';
import quizBot from './components/home/quizBot';
import './styles/styles.css';
import './styles/styles1.css';



require("font-awesome-webpack");
window.$ = window.jQuery = require('jquery');
const Bootstrap = require('bootstrap-sass');
Bootstrap.$ = $;
require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap');
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

render(

  (<Router history={browserHistory} routes={routes}/>
  ),document.getElementById('app')
);