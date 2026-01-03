import React from "react";
import {useTranslation} from "react-i18next";
import {Page} from "@/widgets/Page";

const AdminPanelPageNotAsync = () => {
    const {t} = useTranslation("about");

    return (
        <Page data-teatid={'AdminPanelPage'}>
            {t("Админ панель")}
        </Page>
    );
};

export default AdminPanelPageNotAsync;
