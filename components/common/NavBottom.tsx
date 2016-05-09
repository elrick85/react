import * as React from 'react';
import * as i18next from 'i18next';

export class NavBottom extends React.Component<{}, {}> {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-bottom">
                <div className="container">
                    <h4 style={{color: 'grey'}}>{i18next.t('COPYRIGHT')} &copy; My App 2016</h4>
                </div>
            </nav>
        );
    }
}