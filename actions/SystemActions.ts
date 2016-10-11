import * as Flux from 'flux'; 

import {dispatcher, IAction} from '../stores/Dispatcher'

export class AppActions {
    setLanguage = function(lang) { 
        dispatcher.handleLangAction(lang);
    }

    validUser = function(data){
        if(data.name === "admin"){
            return true;
        }

        return false;
    }

    authUser = function(data){
        if(this.validUser(data)){
            dispatcher.handleAuthAction(data);
        }
    }
}

//Flux.createActions('appActions', dispatcher, new AppActions())                
export var appActions: AppActions = new AppActions();