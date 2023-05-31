import {Modal} from "shared/ui/Modal/Modal";
import {classNames} from "shared/lib/classNames/classNames";
import React, {Suspense} from "react";
import {LoginFormAsync} from "features/AuthByUsername/ui/LoginForm/LoginForm.async";
import {Loader} from "shared/ui/Loader/Loader";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => (
    <Modal
        className={classNames("", {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader/>}>
            <LoginFormAsync/>
        </Suspense>
    </Modal>
);
