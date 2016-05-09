import * as React from 'react';
import * as i18next from 'i18next';

import {localeStore} from '../../stores/LocaleStore'
import {appActions} from '../../actions/SystemActions'

export class LangChoice extends React.Component<{}, {}> {
    _subscription = null
    onValChanged(val) { this.forceUpdate() }
    componentDidMount() {
        this._subscription = localeStore.subscribe(this, this.onValChanged)
    }
    componentWillUnmount() {
        this._subscription.unsubscribe(this, this.onValChanged)
    }
    onChoiceChange(e) {
        appActions.setLanguage(e.target.value)
    }
    render() {
        return <li>
                    <form className="navbar-form navbar-right">
                        <select style={{marginRight: 5}} className="form-control input-sm" value={i18next.language} onChange={this.onChoiceChange.bind(this)}>
                            <option value="am">አማ</option>
                            <option value="en">En</option>
                        </select>
                    </form>
                </li>
    }
}