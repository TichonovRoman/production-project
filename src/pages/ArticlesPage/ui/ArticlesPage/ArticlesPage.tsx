import cls from "./ArticlesPage.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface ArticlesPagePropsType {
    className?: string
}

const ArticlesPage = ({className}: ArticlesPagePropsType) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
        </div>
    );
};
export default memo(ArticlesPage)