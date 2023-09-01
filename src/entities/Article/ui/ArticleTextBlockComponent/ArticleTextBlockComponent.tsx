import cls from "./ArticleTextBlockComponent.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface ArticleTextBlockComponentPropsType {
    className?: string
}

export const ArticleTextBlockComponent = memo(({className}: ArticleTextBlockComponentPropsType) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            ArticleTextBlockComponent
        </div>
    );
});