import cls from "./ArticleDetails.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

interface ArticleDetailsPropsType {
    className?: string
}

export const ArticleDetails = ({className}: ArticleDetailsPropsType) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            ArticleDetails
        </div>
    );
};