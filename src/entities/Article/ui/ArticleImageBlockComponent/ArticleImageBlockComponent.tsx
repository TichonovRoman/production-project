import cls from "./ArticleImageBlockComponent.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

interface ArticleImageBlockComponentPropsType {
    className?: string
}

export const ArticleImageBlockComponent = ({className}: ArticleImageBlockComponentPropsType) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
};