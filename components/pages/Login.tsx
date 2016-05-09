import * as React from 'react';
import * as i18next from 'i18next';

import {NavBar} from '../common/NavBar';
import {NavBottom} from '../common/NavBottom';

export interface LoginProps {
    
    name: string
    
}

export class Login extends React.Component<LoginProps, {}> {
    render() {
        return (
            <div className="container-fluid">
                <div>
                    <NavBar />
                </div>
                <div className="row">
                    <div className="col-md-6">
                    
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">{i18next.t('LOGIN')}</div>
                            <div className="panel-body">                                
                                <form method="post" action="/auth/">
                                    <div className="form-group">
                                        <label for="userName" className="control-label1">{i18next.t('USER_NAME')}</label>
                                        <input value={this.props.name} required type="text" autofocus name="userName" id="userName" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="control-label">{i18next.t('PASSWORD')}</label>
                                        <input type="password" name="password" id="password" className="form-control"></input>
                                    </div>
                                    <div className="pull-right">
                                        <button type="submit" className="btn btn-success"><i className="fa fa-sign-in"></i> {i18next.t('LOGIN')}</button>
                                    </div>
                                </form>

                            </div>
                            <div className="panel-footer">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <NavBottom />
            </div>
        );
    }
}