import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {ArticleDetails} from "@/entities/Article";
import {useParams} from "react-router-dom";
import {DynamicModuleLoader, ReducersList} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {Page} from "@/widgets/Page";

import cls from "./ArticleDetailsPage.module.scss"
import {articleDetailsPageReducer} from "../../model/slices";
import {ArticleDetailsPageHeader} from "@/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import {VStack} from "@/shared/ui/Stack";
import {ArticleRecommendationsList} from "@/features/articleRecommendationsList";
import {ArticleDetailsComments} from "@/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments";
import {ArticleRating} from "@/features/articleRating";

interface ArticleDetailsPagePropsType {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({className}: ArticleDetailsPagePropsType) => {
    const {t} = useTranslation("article-details");
    const {id} = useParams<{ id: string }>()

    if(!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap={"16"} max>
                    <ArticleDetailsPageHeader/>
                    <ArticleDetails id={id}/>
                    <ArticleRating articleId={id}/>
                    <ArticleRecommendationsList/>
                    <ArticleDetailsComments id={id}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage)