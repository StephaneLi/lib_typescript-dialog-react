import { FunctionComponent } from 'react';
import './style.scss';
declare type DialogProps = {
    text: string;
    showDialog?: boolean;
    duration?: number;
    onClose?: CallableFunction;
};
declare const Dialog: FunctionComponent<DialogProps>;
export default Dialog;
