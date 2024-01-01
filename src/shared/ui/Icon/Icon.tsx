import cls from "./Icon.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import React, {memo} from "react";

interface IconPropsType extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean
}

export const Icon = memo(({className, Svg, inverted, ...otherProps}: IconPropsType) => {
    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
            {...otherProps}
        />
    );
});