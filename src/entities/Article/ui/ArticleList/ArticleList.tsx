import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {HTMLAttributeAnchorTarget, memo} from "react";
import {Article, ArticleView} from "../../model/types/article";
import {ArticleListItem} from "../ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";
import {Text, TextSize} from "shared/ui/Text/Text"
import cls from "./ArticleList.module.scss"


interface ArticleListPropsType {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (<ArticleListItemSkeleton className={cls.card} key={index} view={view}/>))
}

export const ArticleList = memo(({className, articles, view = ArticleView.SMALL, isLoading, target}: ArticleListPropsType) => {
            const {t} = useTranslation();

            const renderArticle = (article: Article) => {
                return <ArticleListItem
                    target={target}
                    article={article}
                    view={view}
                    className={cls.card}
                    key={article.id}

                />

            }

            if (!isLoading && !articles.length) {
                return (
                    <div className={classNames(cls.ArticleList, {}, [cls[view], className])}>
                        <Text size={TextSize.L} text={t("Статьи не найдены")}/>
                    </div>
                )
            }

            return (
                <div className={classNames(cls.ArticleList, {}, [cls[view], className])}>
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