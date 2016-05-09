import * as React from 'react';
import * as i18next from 'i18next';

import {LangChoice} from './LangChoice';

export class UserNavBar extends React.Component<{}, {}> {
    render() {
        return <nav className="navbar navbar-default navbar-static-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#main-navbar" aria-expanded="false">
                        <span className="sr-only">Toggle Navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="./" className="navbar-brand"><i className="fa fa-plane"></i> My App</a>
                </div>
                <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{i18next.t('TOURS')}</a></li>
                        <li><a href="#">{i18next.t('GROUPS')}</a></li>
                    </ul>
                    <div id="nav-right">
                        <ul className="nav navbar-nav navbar-right">
                            <LangChoice />
                            <li><a href="#">{i18next.t('PROFILE')}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    }
}