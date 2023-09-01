import cls from "./ArticleImageBlockComponent.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface ArticleImageBlockComponentPropsType {
    className?: string
}

export const ArticleImageBlockComponent = memo(({className}: ArticleImageBlockComponentPropsType) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
});