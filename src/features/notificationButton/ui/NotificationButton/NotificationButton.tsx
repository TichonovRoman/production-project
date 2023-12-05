import cls from "./NotificationButton.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import React, {memo} from "react";
import {Popover} from "shared/ui/Popups";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Icon} from "shared/ui/Icon/Icon";
import NotificationIcon from "shared/assets/icons/notification.svg";
import {NotificationList} from "entities/Notification";

interface NotificationButtonPropsType {
    className?: string
}

export const NotificationButton = memo(({className}: NotificationButtonPropsType) => {
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction={"bottom left"}
            trigger={(<Button theme={ButtonTheme.CLEAR}>
                <Icon Svg={NotificationIcon} inverted/>
            </Button>)}>
            <NotificationList className={cls.notifications}/>
        </Popover>
    );
});