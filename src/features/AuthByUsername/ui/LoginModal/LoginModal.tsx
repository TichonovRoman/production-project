import cls from "./LoginModal.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {Modal} from "shared/ui/Modal/Modal";
import {LoginForm} from "../LoginForm/LoginForm";

interface LoginModalPropsType {
    className?: string
}

export const LoginModal = ({className}: LoginModalPropsType) => {
    return (
        <Modal className={classNames(cls.LoginModal, {}, [className])}>
            <LoginForm/>
        </Modal>
    );
};