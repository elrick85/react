// import * as $ from 'jquery';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Login } from './components/pages/Login/Login';
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

window['App'] = App;

ReactDOM.render(React.createElement(App), document.getElementById('body-container'));