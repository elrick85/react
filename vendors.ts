import NanoFlux = require('./bundle/nanoflux');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Bootstrap from 'bootstrap';
import * as i18next from 'i18next';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import * as lang from './res/strings';

window['i18next'] = i18next;
window['ReactDOM'] = ReactDOM;
window['React'] = React;
window['NanoFlux'] = NanoFlux;
window['lang'] = lang;