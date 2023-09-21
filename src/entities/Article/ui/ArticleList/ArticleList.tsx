import cls from "./ArticleList.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Article, ArticleView} from "../../model/types/article";
import {ArticleListItem} from "../ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";

interface ArticleListPropsType {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (<ArticleListItemSkeleton className={cls.card} key={index} view={view}/>))
}

export const ArticleList = memo(({className, articles, view = ArticleView.SMALL, isLoading}: ArticleListPropsType) => {
            const {t} = useTranslation();

            const renderArticle = (article: Article) => {
                return <ArticleListItem
                    article={article}
                    view={view}
                    className={cls.card}
                    key={article.id}

                />

            }

            return (
                <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                    {articles.length > 0
                        ? articles.map(renderArticle)
                        : null

                    }
                    {isLoading && getSkeletons(view)}

                </div>
            );
        }
    )
;