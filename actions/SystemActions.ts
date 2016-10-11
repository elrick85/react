import NanoFlux = require('../bundle/nanoflux')

import {dispatcher} from '../stores/Dispatcher'

export class AppActions {
    setLanguage = function(lang) { 
        this.dispatch('setLanguage', lang) 
    }

    validUser = function(data){
        if(data.name === "admin"){
            return true;
        }

        return false;
    }

    authUser = function(data){
        if(this.validUser(data)){
            this.dispatch('authUser', data);
        }
    }
}
NanoFlux.createActions('appActions', dispatcher, new AppActions())                
export var appActions: AppActions = NanoFlux.getActions('appActions')