import cls from "./ArticleTextBlockComponent.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {ArticleTextBlock} from "../../model/types/article";
import {Text} from "@/shared/ui/Text";

interface ArticleTextBlockComponentPropsType {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({className, block}: ArticleTextBlockComponentPropsType) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.title}/>}
            {block.paragraphs.map((paragraph, index) =>
                <Text
                    text={paragraph}
                    key={paragraph}
                    className={cls.paragraph}/>
            )}
        </div>
    );
});