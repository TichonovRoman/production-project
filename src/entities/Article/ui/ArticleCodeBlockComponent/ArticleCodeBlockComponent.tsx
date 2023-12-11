import cls from "./ArticleCodeBlockComponent.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {ArticleCodeBlock} from "../../model/types/article";
import {Code} from "@/shared/ui/Code/Code";

interface ArticleCodeBlockComponentPropsType {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({className, block}: ArticleCodeBlockComponentPropsType) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});