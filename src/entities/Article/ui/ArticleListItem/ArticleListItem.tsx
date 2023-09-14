import cls from "./ArticleListItem.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Article, ArticleView} from "../../model/types/article";

interface ArticleListItemPropsType {
    className?: string;
    article: Article;
    view: ArticleView
}

export const ArticleListItem = memo(({className, article, view}: ArticleListItemPropsType) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticleListItem, {}, [className])}>

        </div>
    );
});