import {ILoginState} from './ILoginState';

export class LoginStateModel implements ILoginState {
    name: string = '';
    pass: string = '';

    constructor(_name?: string, _pass?: string) {
        this.name = _name || '';
        this.pass = _pass || '';
    }
}