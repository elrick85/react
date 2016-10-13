import * as React from 'react';
import {i18n} from '../../strings';

export class CommonComponent<P, S> extends React.Component<P, S> {
    i18next = i18n;
}