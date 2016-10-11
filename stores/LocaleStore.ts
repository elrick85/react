import * as Flux from 'flux';
import * as FluxUtils from 'flux/utils'; 
import * as i18next from 'i18next';
import {dispatcher, IAction} from '../stores/Dispatcher'


export class LocaleStoreClass {
    
    static onSetLanguage(lang) {
        i18next.changeLanguage(lang)
    }

    static onAuthUser(data){
        console.log("User auth");
    }    
}

dispatcher.register((action: IAction):void => {
    switch(action.type){
        case "SET_LANGUAGE": 
            LocaleStoreClass.onSetLanguage(action.data);
            break;
        case "AUTH_USER":
            LocaleStoreClass.onAuthUser(action.data);
            break;
    }
});

export var localeStore = new FluxUtils.Store<IAction>(dispatcher);