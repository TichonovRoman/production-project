import {ReactNode} from "react";
import {createPortal} from "react-dom";

interface PortalPropsType {
    children?: ReactNode,
    element?: HTMLElement
}

export const Portal = ({children, element = document.body}: PortalPropsType) => {
    return createPortal(children, element)
};