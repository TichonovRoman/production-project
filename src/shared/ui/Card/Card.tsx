import cls from "./Card.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {HTMLAttributes, memo, ReactNode} from "react";

export enum CardTheme {
    NORMAL = "normal",
    OUTLINED = "outlined"
}

interface CardPropsType extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = memo(({className, children, theme = CardTheme.NORMAL, max, ...otherProps}: CardPropsType) => {
    return (
        <div className={classNames(cls.Card, {[cls.max]: max}, [className, cls[theme]])} {...otherProps}>
            {children}
        </div>
    );
});