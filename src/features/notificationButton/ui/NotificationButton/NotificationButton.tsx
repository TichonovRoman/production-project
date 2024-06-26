import cls from "./NotificationButton.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import React, {memo, useCallback, useState} from "react";
import {Popover} from "@/shared/ui/Popups";
import {Button, ButtonTheme} from "@/shared/ui/Button";
import {Icon} from "@/shared/ui/Icon";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import {NotificationList} from "@/entities/Notification";
import {Drawer} from "@/shared/ui/Drawer";
import {BrowserView, MobileView} from "react-device-detect";

interface NotificationButtonPropsType {
    className?: string
}

export const NotificationButton = memo(({className}: NotificationButtonPropsType) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, []);
    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = ((<Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
        <Icon Svg={NotificationIcon} inverted/>
    </Button>))

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction={"bottom left"}
                    trigger={trigger}>
                    <NotificationList className={cls.notifications}/>
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList/>
                </Drawer>
            </MobileView>
        </>

    );
});