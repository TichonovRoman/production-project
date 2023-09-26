import cls from "./ArticlesPageFilters.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector} from "entities/Article";
import {articlesPageActions} from "../../model/slices/articlesPageSlice";
import {useSelector} from "react-redux";
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageView
} from "../../model/selectors/articlesPageSelectors";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Select} from "shared/ui/Select/Select";
import {Card} from "shared/ui/Card/Card";
import {Input} from "shared/ui/Input/Input";
import {SortOrder} from "shared/types";

interface ArticlesPageFiltersPropsType {
    className?: string
}

export const ArticlesPageFilters = memo(({className}: ArticlesPageFiltersPropsType) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }, [dispatch]);
    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort))
    }, [dispatch]);
    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder))
    }, [dispatch]);
    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search))
    }, [dispatch]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />
            </Card>
        </div>
    );
});