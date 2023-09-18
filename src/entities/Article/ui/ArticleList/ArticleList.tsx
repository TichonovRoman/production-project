import cls from "./ArticleList.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Article, ArticleView} from "../../model/types/article";
import {ArticleListItem} from "../ArticleListItem/ArticleListItem";

interface ArticleListPropsType {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView
}

export const ArticleList = memo(({className, articles, view = ArticleView.SMALL, isLoading}: ArticleListPropsType) => {
    const {t} = useTranslation();

    const renderArticle = (article: Article) => {
        return <ArticleListItem
            article={article}
            view={view}
            className={cls.card}

        />

    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null

            }

        </div>
    );
});