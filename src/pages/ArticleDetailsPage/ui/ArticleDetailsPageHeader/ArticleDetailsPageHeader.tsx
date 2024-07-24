import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {Button, ButtonTheme} from "@/shared/ui/Button";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCanEditArticle} from "@/pages/ArticleDetailsPage/model/selectors/article";
import {getArticleDetailsData} from "@/entities/Article";
import {HStack} from "@/shared/ui/Stack";
import {getRouteArticleDetails, getRouteArticles} from "@/shared/const/router";

interface ArticleDetailsPageHeaderPropsType {
    className?: string
}

export const ArticleDetailsPageHeader = memo(({className}: ArticleDetailsPageHeaderPropsType) => {
    const {t} = useTranslation();
    const navigate = useNavigate()
    const canEdit = useSelector(getCanEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles())
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        article?.id && navigate(getRouteArticleDetails(article.id))
    }, [navigate, article?.id])
    return (
        <HStack max justify={"between"} className={classNames("", {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t("Назад к списку")}
            </Button>
            {canEdit && <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onEditArticle}>
                {t("Редактировать")}
            </Button>}
        </HStack>
    );
});