import cls from "./ArticleCodeBlockComponent.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface ArticleCodeBlockComponentPropsType {
    className?: string
}

export const ArticleCodeBlockComponent = memo(({className}: ArticleCodeBlockComponentPropsType) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            ArticleCodeBlockComponent
        </div>
    );
});