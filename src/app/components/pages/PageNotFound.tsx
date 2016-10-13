import * as React from 'react';
import {NavBar} from '../common/NavBar';
import {NavBottom} from '../common/NavBottom';

export class PageNotFound extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <NavBar />
                <h1>Error 404 - Page Not Found</h1>
                <NavBottom />
            </div>
        );
    }
}