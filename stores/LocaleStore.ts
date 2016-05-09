import NanoFlux = require('../bundle/nanoflux')

import * as i18next from 'i18next';
import {dispatcher} from '../stores/Dispatcher'


export class LocaleStoreClass {
    
    onSetLanguage = function(lang) {
        i18next.changeLanguage(lang)
        this.notify()
    }
    notify(args?: any) {}
    
}
    
NanoFlux.createStore('localeStore', new LocaleStoreClass())
export var localeStore = NanoFlux.getStore('localeStore');

dispatcher.connectTo(localeStore);