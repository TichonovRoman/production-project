import cls from "./Code.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {memo, ReactNode, useCallback} from "react";
import {Button, ButtonTheme} from "@/shared/ui/Button";
import {Icon} from "@/shared/ui/Icon";
import CopyIcon from "@/shared/assets/icons/CopyIcon.svg"

interface CodePropsType {
    className?: string
    text: string
}

export const Code = memo(({className, text}: CodePropsType) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    },[text])
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyIcon}/>
                {/*<Icon Svg={CopyIcon}/>*/}
            </Button>
            <code>
            {text}
        </code>
        </pre>
    );
});