import cls from "./Icon.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import React, {memo} from "react";

interface IconPropsType {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({className, Svg}: IconPropsType) => {
    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    );
});