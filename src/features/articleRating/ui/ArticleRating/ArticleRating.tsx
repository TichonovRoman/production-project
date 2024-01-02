import React, {memo} from 'react';
import {RatingCard} from "@/entities/Rating";
import {useTranslation} from "react-i18next";

interface ArticleRatingProps {
    className?: string
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
        />
    );
});
