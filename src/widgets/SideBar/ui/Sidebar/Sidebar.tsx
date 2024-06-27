import {classNames} from "@/shared/lib/classNames/classNames";
import {memo, useMemo, useState} from "react";
import {Button, ButtonSize, ButtonTheme} from "@/shared/ui/Button";
import {useSelector} from "react-redux";
import cls from "./Sidebar.module.scss";
import {VStack} from "@/shared/ui/Stack";
import {getSidebarItems} from "@/widgets/SideBar/model/selectors/getSidebarItems";
import {SidebarItem} from "@/widgets/SideBar/ui/SidebarItem/SidebarItem";
import {LangSwitcher} from "@/shared/ui/LangSwitcher";
// eslint-disable-next-line tihonovrv-plugin/layer-imports
import {ThemeSwitcher} from "@/features/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemList = useSelector(getSidebarItems)

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemList]);

    return (
        <aside
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
            <VStack role={"navigation"} gap={"8"} className={cls.items}>
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </aside>
    );
});
