import {dispatcher} from '../stores/Dispatcher'

export class AppActions {
    setLanguage = function (lang, token) {
        dispatcher.handleLangAction(lang);

        dispatcher.waitFor(token);
    };

    validUser = function (data) {
        return data.name === "admin";
    };

    authUser = function (data) {
        if (this.validUser(data)) {
            dispatcher.handleAuthAction(data);
        }
    };
}

export var appActions:AppActions = new AppActions();