import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo, useCallback, Suspense} from "react";
import {Text, TextSize} from "@/shared/ui/Text";
import {AddCommentForm} from "@/features/addCommentForm";
import {CommentList} from "@/entities/Comment";
import {useSelector} from "react-redux";
import {getArticleComments} from "../../model/slices/articleDetailsCommentSlice";
import {getArticleCommentsIsLoading} from "@/pages/ArticleDetailsPage/model/selectors/comments";
import {addCommentForArticle} from "../../model/services/addCommentForArticle/addCommentForArticle";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useInitialEffect} from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import {
    fetchCommentsByArticleId
} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {VStack} from "@/shared/ui/Stack";
import {Loader} from "@/shared/ui/Loader";

interface ArticleDetailsCommentsPropsType {
    className?: string;
    id?: string
}

export const ArticleDetailsComments = memo(({className, id}: ArticleDetailsCommentsPropsType) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    })
    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t("Комментарии")}/>
            <Suspense fallback={<Loader/>}>
                <AddCommentForm onSendComment={onSendComment}/>
            </Suspense>
            <CommentList isLoading={commentsIsLoading} comments={comments}/>
        </VStack>
    );
});