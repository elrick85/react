import * as Flux from 'flux';

export interface IAction {
    type: string;
    data: any;
}

class AppDispatcher extends Flux.Dispatcher<IAction>{
    handleLangAction(data: any) {
        this.dispatch({ type: "SET_LANGUAGE", data: data });
    }

    handleAuthAction(data: any) {
        this.dispatch({ type: "AUTH_USER", data: data });
    }
}

export var dispatcher = new AppDispatcher();