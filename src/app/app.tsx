import * as JQuery from 'jquery';

import * as React from 'react';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Login } from './components/pages/Login/Login';
import { PageNotFound } from './components/pages/PageNotFound';
import {localeStore} from './stores/LocaleStore';

export class App extends React.Component<{}, {}>{
    onValChanged(val) {
        this.forceUpdate();
        console.log("forceUpdate app");
    }
    componentDidMount() {
        localeStore.subscribe(this.onValChanged, this);
    }
    componentWillUnmount() {
        localeStore.unsubscribe();
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Login} />
                <Route path="/login/:name" component={Login} />
                <Route path="*" component={PageNotFound} />
            </Router>
        );
    }
};