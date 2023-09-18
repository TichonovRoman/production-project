import cls from "./Card.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {HTMLAttributes, memo, ReactNode} from "react";

interface CardPropsType extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = memo(({className, children, ...otherProps}: CardPropsType) => {
    return (
        <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
});