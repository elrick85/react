// import * as $ from 'jquery';
import NanoFlux = require('./bundle/nanoflux');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Bootstrap from 'bootstrap';
import * as i18next from 'i18next';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import { Login } from './components/pages/Login';
import { PageNotFound } from './components/pages/PageNotFound';
import { localeStore } from './stores/LocaleStore';

export class App extends React.Component<{}, {}>{
    _subscription = null
    onValChanged(val) { this.forceUpdate() }
    componentDidMount() {
        this._subscription = localeStore.subscribe(this, this.onValChanged)
    }
    componentWillUnmount() {
        this._subscription.unsubscribe(this, this.onValChanged)
    }
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Login}/>                
                <Route path="/login/:name" component={Login}/>
                <Route path="*" component={PageNotFound} />
            </Router>
        );
    }
};

window['i18next'] = i18next;
window['ReactDOM'] = ReactDOM;
window['React'] = React;
window['App'] = App;
window['NanoFlux'] = NanoFlux;