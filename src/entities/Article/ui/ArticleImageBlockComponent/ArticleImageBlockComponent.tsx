import cls from "./ArticleImageBlockComponent.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {ArticleImageBlock} from "../../model/types/article";
import {Text, TextAlign} from "../../../../shared/ui/Text/Text"

interface ArticleImageBlockComponentPropsType {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({className, block}: ArticleImageBlockComponentPropsType) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} className={cls.img} alt={block.title}/>
            {block.title && <Text text={block.title} align={TextAlign.CENTER} /> }
        </div>
    );
});