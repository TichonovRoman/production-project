import cls from "./ArticleCodeBlockComponent.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

interface ArticleCodeBlockComponentPropsType {
    className?: string
}

export const ArticleCodeBlockComponent = ({className}: ArticleCodeBlockComponentPropsType) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>

        </div>
    );
};