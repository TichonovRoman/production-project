import cls from "./Modal.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import React from "react";

interface ModalPropsType {
    className?: string,
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void
}

export const Modal = ({className, children, isOpen, onClose}: ModalPropsType) => {

    const mods: Record<string, boolean> = {

    }

    return (
        <div className={classNames(cls.modal, {}, [className])}>
            <div className={cls.overlay}>
                <div className={cls.content}>{children}</div>
            </div>
        </div>
    );
};