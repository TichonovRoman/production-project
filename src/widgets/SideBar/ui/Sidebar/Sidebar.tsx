import {classNames} from "shared/lib/classNames/classNames";
import {memo, useMemo, useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

import cls from "./Sidebar.module.scss";
import {SidebarItemsList} from "../model/items";
import {SidebarItem} from "widgets/Sidebar/ui/SidebarItem/SidebarItem";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => {
        return SidebarItemsList.map((item) => {
            return <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
            />
        })
    }, [SidebarItemsList, collapsed])

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
});
