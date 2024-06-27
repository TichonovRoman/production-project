import cls from "./Tabs.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {memo, ReactNode, useCallback, useMemo} from "react";
import {Card, CardTheme} from "@/shared/ui/Card";
import {ArticleType} from "@/entities/Article/model/consts/articleConsts";

export interface TabsItem {
    value: string,
    content: ReactNode
}

interface TabsPropsType {
    className?: string,
    tabs: TabsItem[],
    value: string,
    onTabClick: (tab: TabsItem) => void
}

export const Tabs = memo(({className, tabs, value, onTabClick}: TabsPropsType) => {


    const clickHandle = useCallback((tab: TabsItem) => {
        return () => {
            onTabClick(tab)
        }
    },[onTabClick])

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    onClick={clickHandle(tab)}
                    className={cls.tab}
                    key={tab.value}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});