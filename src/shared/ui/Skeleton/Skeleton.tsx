import cls from "./Skeleton.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {CSSProperties, memo} from "react";

interface SkeletonPropsType {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string
}

export const Skeleton = memo(({className, border, height, width}: SkeletonPropsType) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border
    }
    return (
        <div style={styles} className={classNames(cls.Skeleton, {}, [className])}/>
    );
});