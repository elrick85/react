import * as Flux from 'flux';
import * as FluxUtils from 'flux/utils';
import * as i18next from 'i18next';
import * as FBEmitter from 'fbemitter';
import {dispatcher, IAction, IState, State} from './Dispatcher'


export class LocaleStoreClass extends FluxUtils.ReduceStore<IState, IAction> {
    private _subscription: FBEmitter.EventSubscription = null;

    subscribe(listener: Function, context?: any): void {
        this._subscription = this.addListener(listener.bind(context));
    }

    unsubscribe(): void{
        this._subscription.remove();
    }

    getInitialState():IState {
        return new State();
    }

    reduce(state: IState, action: IAction):IState {
        return State.createForLang(action.data);
    }
}

dispatcher.register((action:IAction):void => {
    switch (action.type) {
        case "SET_LANGUAGE":
            i18next.changeLanguage(action.data);
            break;
        case "AUTH_USER":
            console.log("User auth");
            break;
    }
});

export var localeStore = new LocaleStoreClass(dispatcher);