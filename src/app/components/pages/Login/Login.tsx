import * as React from 'react';
import {CommonComponent} from '../../common/CommonComponent';
import { NavBar } from '../../common/NavBar';
import { NavBottom } from '../../common/NavBottom';
import { appActions } from '../../../actions/SystemActions'

import {ILoginState} from './ILoginState';
import {LoginStateModel} from './LoginStateModel';

interface ILoginParams{
    name: string;
}

interface ILoginProps {
    params: ILoginParams
}

export class Login extends CommonComponent<ILoginProps, ILoginState> {
    _subscription = null;

    constructor(props: ILoginProps) {
        super(props);
        this.state = new LoginStateModel();

    }

    componentDidMount() {
        this.setState({
            // route components are rendered with useful information, like URL params
            name: this.props.params.name,
            pass: ''
        })
    }

    handleNameChange(e) {
        this.setState(new LoginStateModel(e.target.value, this.state.pass));
    }

    handlePassChange(e) {
        this.setState(new LoginStateModel(this.state.name, e.target.value));
    }

    handleSubmit(e) {
        e.preventDefault();
        appActions.authUser(this.state);
        this.setState(new LoginStateModel());
    }
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
                            <div className="panel-heading">{this.i18next.t('LOGIN')}: {this.props.params.name}</div>
                            <div className="panel-body">
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="form-group">
                                        <label className="control-label1">{this.i18next.t('USER_NAME')}</label>
                                        <input
                                            value={this.state.name}
                                            onChange={this.handleNameChange.bind(this)}
                                            required type="text" name="userName" id="userName" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">{this.i18next.t('PASSWORD')}</label>
                                        <input type="password"
                                            value={this.state.pass}
                                            onChange={this.handlePassChange.bind(this)}
                                            name="password" id="password" className="form-control"></input>
                                    </div>
                                    <div className="pull-right">
                                        <button type="submit" className="btn btn-success"><i className="fa fa-sign-in"></i> {this.i18next.t('LOGIN')}</button>
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