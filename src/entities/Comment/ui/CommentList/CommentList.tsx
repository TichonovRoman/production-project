import {classNames} from "@/shared/lib/classNames/classNames";
import {memo} from "react";
import {useTranslation} from "react-i18next";
import {Text} from "@/shared/ui/Text/Text";
import {CommentCard} from "../CommentCard/CommentCard";
import {Comment} from "@/entities/Comment";
import {VStack} from "@/shared/ui/Stack";

interface CommentListPropsType {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo(({className, isLoading, comments}: CommentListPropsType) => {
    const {t} = useTranslation();

    if (isLoading) {
        return <VStack gap={'16'} className={classNames('', {}, [className])}>
            <CommentCard isLoading/>
            <CommentCard isLoading/>
            <CommentCard isLoading/>
        </VStack>
    }

    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            {comments?.length ? comments.map(comment => (
                <CommentCard key={comment.id} isLoading={isLoading} comment={comment}/>
            )) : <Text text={t("Комментарии отсутствуют")}/>}
        </VStack>
    );
});