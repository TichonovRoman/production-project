import cls from "./Button.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}

export const Button: FC<ButtonPropsType> = (props) => {
    const {className, children, theme, ...otherProps} = props
    return (
        <button {...otherProps} className={classNames(cls.Button, {[cls[theme]]: true}, [className])}>
            {children}
        </button>
    );
};