/* eslint-disable import/default */
import React from 'react';
import 'babel-polyfill';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import test from './components/home/test';
import './styles/styles.css';



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