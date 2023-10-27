import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {ArticleDetails, ArticleList} from "entities/Article";
import {useParams} from "react-router-dom";
import {Text, TextSize} from "shared/ui/Text/Text";
import {CommentList} from "entities/Comment";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {getArticleComments} from "../../model/slices/articleDetailsCommentSlice";
import {useSelector} from "react-redux";
import {getArticleCommentsIsLoading} from "pages/ArticleDetailsPage/model/selectors/comments";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchCommentsByArticleId} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {AddCommentForm} from "features/addCommentForm";
import {addCommentForArticle} from "../../model/services/addCommentForArticle/addCommentForArticle";
import {Page} from "widgets/Page/Page";
import {getArticleRecommendations} from "../../model/slices/articleDetailsPageRecommendationsSlice";
import {getArticleRecommendationsIsLoading} from "../../model/selectors/recommendations";
import {
    fetchArticleRecommendations
} from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";

import cls from "./ArticleDetailsPage.module.scss"
import {articleDetailsPageReducer} from "../../model/slices";
import {ArticleDetailsPageHeader} from "pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import {VStack} from "shared/ui/Stack";
import {ArticleRecommendationsList} from "features/articleRecommendationsList";

interface ArticleDetailsPagePropsType {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({className}: ArticleDetailsPagePropsType) => {
    const {t} = useTranslation("article-details");
    const {id} = useParams<{ id: string }>()
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    })

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t("Статья не найдена")}
            </Page>
        )
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap={'16'} max>
                    <ArticleDetailsPageHeader/>
                    <ArticleDetails id={id}/>
                    <ArticleRecommendationsList />
                    <Text
                        size={TextSize.L}
                        className={cls.commentTitle}
                        title={t("Комментарии")}/>
                    <AddCommentForm onSendComment={onSendComment}/>
                    <CommentList isLoading={commentsIsLoading} comments={comments}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage)