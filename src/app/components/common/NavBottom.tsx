import * as React from 'react';
import {CommonComponent} from './CommonComponent';

export class NavBottom extends CommonComponent<{}, {}> {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-bottom">
                <div className="container">
                    <h4 style={{color: 'grey'}}>{this.i18next.t('COPYRIGHT')} &copy; My App 2016</h4>
                </div>
            </nav>
        );
    }
}