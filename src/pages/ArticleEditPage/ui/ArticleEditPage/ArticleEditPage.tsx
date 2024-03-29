import cls from "./ArticleEditPage.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Page} from "@/widgets/Page/ui/Page/Page";
import {useParams} from "react-router-dom";

interface ArticleEditPagePropsType {
    className?: string
}

const ArticleEditPage = memo(({className}: ArticleEditPagePropsType) => {
    const {t} = useTranslation();
    const {id} = useParams<{ id: string }>()
    const isEdit = Boolean(id)
    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t("Реадактирование статьи с ID = ") + id
                : t("Создание новой статьи")
            }
        </Page>
    );
});
export default ArticleEditPage