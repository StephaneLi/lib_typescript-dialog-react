import { FunctionComponent } from "react";
import './style.scss';
declare type DropDownProps = {
    label: string;
    name: string;
    zIndex?: number;
    choicies: string[];
    errorMessage?: string;
    error?: boolean;
    value?: string;
    textColor?: string;
    focusColor?: string;
    errorColor?: string;
    borderColor?: string;
    borderRadius?: string;
    onSelect?: CallableFunction;
};
declare const Dropdown: FunctionComponent<DropDownProps>;
export default Dropdown;
