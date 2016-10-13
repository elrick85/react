import * as React from 'react';
import {CommonComponent} from './CommonComponent';

import {localeStore} from '../../stores/LocaleStore'
import {appActions} from '../../actions/SystemActions'

export class LangChoice extends CommonComponent<{}, {}> {
    onValChanged(val) {
        this.forceUpdate();
        console.log("forceUpdate LangChoice");
    }

    componentDidMount() {
        localeStore.subscribe(this.onValChanged, this);
    }

    componentWillUnmount() {
        localeStore.unsubscribe();
    }

    onChoiceChange(e) {
        var token = localeStore.getDispatchToken();
        appActions.setLanguage(e.target.value, token);
    }

    render() {
        return <li>
                    <form className="navbar-form navbar-right">
                        <select style={{marginRight: 5}} className="form-control input-sm" value={this.i18next.language} onChange={this.onChoiceChange.bind(this)}>
                            <option value="am">አማ</option>
                            <option value="en">En</option>
                        </select>
                    </form>
                </li>
    }
}