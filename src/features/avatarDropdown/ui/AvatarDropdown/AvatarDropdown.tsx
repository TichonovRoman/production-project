import cls from "./AvatarDropdown.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import React, {memo, useCallback} from "react";
import {Dropdown} from "shared/ui/Popups";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from "entities/User";
import {useDispatch, useSelector} from "react-redux";

interface AvatarDropdownPropsType {
    className?: string
}

export const AvatarDropdown = memo(({className}: AvatarDropdownPropsType) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminAvailable = isAdmin || isManager;

    if (!authData) {
        return null
    }
    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction={"bottom left"}
            items={[
                ...(isAdminAvailable ? [{content: t("Админка"), href: RoutePath.admin_panel}] : []),
                {content: t("Профиль"), href: RoutePath.profile + authData.id},
                {content: t("Выйти"), onClick: onLogout},
            ]}
            trigger={<Avatar size={30} src={authData.avatar} alt={"avatar"}/>}
        />
    );
});