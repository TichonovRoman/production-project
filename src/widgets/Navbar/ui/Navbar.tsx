import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import React, {memo, useCallback, useState} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from "entities/User";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Dropdown} from "shared/ui/Popups";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {HStack} from "shared/ui/Stack";
import {NotificationButton} from "features/notificationButton";
import {AvatarDropdown} from "features/avatarDropdown";
import {Drawer} from "shared/ui/Drawer/Drawer";
import {NotificationList} from "entities/Notification";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);


    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    theme={TextTheme.INVERTED}
                    className={cls.appName}
                    title={t("Мое приложение")}/>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.article_create}
                    className={cls.createBtn}
                >
                    {t("Создать статью")}
                </AppLink>
                <HStack gap={"16"} className={cls.actions}>
                    <NotificationButton/>
                    <AvatarDropdown/>
                </HStack>

            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t("Войти")}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
