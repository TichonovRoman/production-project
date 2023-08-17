import cls from "./ArticleDetails.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsReducer} from "../../model/slice/articleDetailsSlice";
import {memo, useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleById} from "../../model/services/fetchArticleById/fetchArticleById";
import {useSelector} from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../model/selectors/articleDetails";
import {TextAlign, Text} from "shared/ui/Text/Text";

interface ArticleDetailsPropsType {
    className?: string;
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(({className, id}: ArticleDetailsPropsType) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        dispatch(fetchArticleById(id))
    },[dispatch, id])

    let content;

    if(isLoading) {
        content = (
            <div>Loading...</div>
        )
    } else if(error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}/>
        )
    } else {
        content = (
            <div>ArticleDetails</div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});