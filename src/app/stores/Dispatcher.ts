import * as Flux from 'flux';

export interface IAction {
    type: string;
    data: string;
}

export interface IState {
    lang: string;
}

export class State implements IState{
    public lang: string;

    static createForLang(lang?: string){
        var _s:IState = new State();
        _s.lang = lang || "eng";

        return _s;
    }
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