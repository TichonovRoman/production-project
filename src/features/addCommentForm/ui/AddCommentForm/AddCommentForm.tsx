import cls from "./AddCommentForm.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {Input} from "shared/ui/Input/Input";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {
    getAddCommentFormError,
    getAddCommentFormText
} from "../../model/selectors/addCommentFormSelectors";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addCommentFormActions, addCommentFormReducer} from "../../model/slices/addCommentFormSlice";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {sendComment} from "features/addCommentForm/model/services/sendComment/sendComment";

interface AddCommentFormPropsType {
    className?: string
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({className}: AddCommentFormPropsType) => {
    const {t} = useTranslation();
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch]);

    const onSendComment = useCallback(() => {
        dispatch(sendComment())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder={t("Введите текст комментария")}
                />
                <Button onClick={onSendComment} theme={ButtonTheme.OUTLINE}>{t("Отправить")}</Button>
            </div>

        </DynamicModuleLoader>

    );
});

export default AddCommentForm;