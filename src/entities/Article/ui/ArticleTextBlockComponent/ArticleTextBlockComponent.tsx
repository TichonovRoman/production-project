import cls from "./ArticleTextBlockComponent.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

interface ArticleTextBlockComponentPropsType {
    className?: string
}

export const ArticleTextBlockComponent = ({className}: ArticleTextBlockComponentPropsType) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>

        </div>
    );
};