import NanoFlux = require('../bundle/nanoflux')

import {dispatcher} from '../stores/Dispatcher'

export class AppActions {
    
    setLanguage = function(lang) { this.dispatch('setLanguage', lang) }
    
}
NanoFlux.createActions('appActions', dispatcher, new AppActions())                
export var appActions: AppActions = NanoFlux.getActions('appActions')