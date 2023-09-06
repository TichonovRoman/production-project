import cls from "./Code.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {memo, ReactNode} from "react";

interface CodePropsType {
    className?: string
    children: ReactNode
}

export const Code = memo(({className, children}: CodePropsType) => {
    return (
        <pre>
            <code className={classNames(cls.Code, {}, [className])}>
            {children}
        </code>
        </pre>
    );
});