import cls from "./ArticleViewSelector.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {memo} from "react";
import ListIcon from "@/shared/assets/icons/BigList.svg"
import TiledIcon from "@/shared/assets/icons/SmallList.svg"
import {Button, ButtonTheme} from "@/shared/ui/Button";
import {Icon} from "@/shared/ui/Icon";
import {ArticleView} from "@/shared/types/consts/articleConsts";

interface ArticleViewSelectorPropsType {
    className?: string;
    view: ArticleView,
    onViewClick: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icons: TiledIcon
    },
    {
        view: ArticleView.BIG,
        icons: ListIcon
    },
]

export const ArticleViewSelector = memo(({className, onViewClick, view}: ArticleViewSelectorPropsType) => {

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button key={index}
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icons}
                        className={classNames("", {[cls.notSelected]: viewType.view !== view})}
                    />
                </Button>
            ))}
        </div>
    );
});