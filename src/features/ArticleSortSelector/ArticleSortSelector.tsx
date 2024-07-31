import cls from "./ArticleSortSelector.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo, useMemo} from "react";
import {Select, SelectOption} from "@/shared/ui/Select";
import {SortOrder} from "@/shared/types";
import {ArticleSortField} from "@/shared/types/consts/articleConsts";

interface ArticleSortSelectorPropsType {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(({
                                             className,
                                             sort,
                                             onChangeSort,
                                             onChangeOrder,
                                             order
                                         }: ArticleSortSelectorPropsType) => {
    const {t} = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: "asc",
            content: t("возрастанию"),
        },
        {
            value: "desc",
            content: t("убыванию"),
        },
    ], [t]);
    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t("дате создания"),
        },
        {
            value: ArticleSortField.TITLE,
            content: t("названию"),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t("просмотрам"),
        },
    ], [t])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                value={sort}
                onChange={onChangeSort}
                options={sortFieldOptions}
                label={t("Сортировать ПО")}
            />
            <Select<SortOrder>
                value={order}
                onChange={onChangeOrder}
                options={orderOptions}
                label={t("по")}
                className={cls.order}
            />
        </div>
    );
});