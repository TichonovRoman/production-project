import cls from "./ArticleDetailsPage.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {ArticleDetails} from "entities/Article";

interface ArticleDetailsPagePropsType {
    className?: string
}

const ArticleDetailsPage = ({className}: ArticleDetailsPagePropsType) => {
    const {t} = useTranslation('article');
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails/>
        </div>
    );
};
export default memo(ArticleDetailsPage)