import cls from "./ArticleInfiniteList.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {useSelector} from "react-redux";
import {getArticles} from "../../model/slices/articlesPageSlice";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from "../../model/selectors/articlesPageSelectors";
import {ArticleList} from "@/entities/Article";
import {Text} from "@/shared/ui/Text";

interface ArticleInfiniteListPropsType {
    className?: string
}

export const ArticleInfiniteList = memo(({className}: ArticleInfiniteListPropsType) => {
    const {t} = useTranslation();
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesPageView)
    const error = useSelector(getArticlesPageError)

    if (error) {
        return <Text text={t("Ошибка при загрузке статей")}/>
    }

    return (
        <div className={classNames(cls.ArticleInfiniteList, {}, [className])}>
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={className}
            />
        </div>
    );
});