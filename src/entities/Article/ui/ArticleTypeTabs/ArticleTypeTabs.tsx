import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo, useCallback, useMemo} from "react";
import {Tabs, TabsItem} from "shared/ui/Tabs/Tabs";
import {ArticleType} from "entities/Article";

interface ArticleTypeTabsPropsType {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo(({className, value, onChangeType}: ArticleTypeTabsPropsType) => {
    const {t} = useTranslation();
    const typeTabs = useMemo<TabsItem[]>(() => [
        {value: ArticleType.ALL, content: "Все статьи"},
        {value: ArticleType.IT, content: "Айти"},
        {value: ArticleType.ECONOMICS, content: "Экономика"},
        {value: ArticleType.SCIENCE, content: "Наука"},
    ], [])

    const onTabClick = useCallback((type: TabsItem) => {
        onChangeType(type.value as ArticleType)
    }, [])

    return (
        <Tabs
            tabs={typeTabs}
            onTabClick={onTabClick}
            value={value}
            className={classNames('', {}, [className])}/>
    );
});