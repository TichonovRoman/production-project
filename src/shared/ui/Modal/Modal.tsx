import cls from "./Modal.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import React, {MouseEvent, useCallback, useEffect, useRef, useState} from "react";
import {Portal} from "shared/ui/Portal/Portal";
import {useTheme} from "app/providers/ThemeProvider";

interface ModalPropsType {
    className?: string,
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal = ({className, children, isOpen, onClose}: ModalPropsType) => {

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const {theme} = useTheme();


    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])
    const onClickContent = (event: MouseEvent) => event.stopPropagation()
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onCloseHandler()
        }
    }, [onCloseHandler])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls[theme]]: true
    }

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isOpen, clearTimeout])

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={onCloseHandler}>
                    <div className={cls.content} onClick={onClickContent}>{children}</div>
                </div>
            </div>
        </Portal>

    );
};