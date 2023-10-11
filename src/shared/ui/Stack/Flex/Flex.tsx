import cls from "./Flex.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {ReactNode} from "react";

export type FlexJustify = "start" | "center" | "end" | "between";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
}

interface FlexPropsType {
    className?: string,
    children: ReactNode,
    justify?: FlexJustify,
    align?: FlexAlign,
    direction?: FlexDirection
}

export const Flex = (props: FlexPropsType) => {
    const {
        className,
        children,
        align = "center",
        direction = "row",
        justify = "start"
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction]
    ]

    return (
        <div className={classNames(cls.Flex, {}, classes)}>
            {children}
        </div>
    );
}