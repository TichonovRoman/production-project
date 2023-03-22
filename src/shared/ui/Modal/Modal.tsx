import cls from "./Modal.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import React, {MouseEvent, useEffect, useRef, useState} from "react";

interface ModalPropsType {
    className?: string,
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal = ({className, children, isOpen, onClose}: ModalPropsType) => {

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>()


    const onClickHandler = () => {
        if(onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }
    const onClickContent = (event: MouseEvent) => event.stopPropagation()

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current)
        }
    },[])

    return (
        <div className={classNames(cls.modal, mods, [className])}>
            <div className={cls.overlay} onClick={onClickHandler}>
                <div className={cls.content} onClick={onClickContent}>{children}</div>
            </div>
        </div>
    );
};