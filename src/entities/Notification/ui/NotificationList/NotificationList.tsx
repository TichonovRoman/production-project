import cls from "./NotificationList.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {memo} from "react";
import {useNotifications} from "../../api/notificationApi";
import {VStack} from "@/shared/ui/Stack";
import {NotificationItem} from "@/entities/Notification/ui/NotificationItem/NotificationItem";
import {Skeleton} from "@/shared/ui/Skeleton";

interface NotificationListPropsType {
    className?: string
}

export const NotificationList = memo(({className}: NotificationListPropsType) => {
    const {data, isLoading} = useNotifications(null, {
        pollingInterval: 10000
    });

    if (isLoading) {
        return <VStack gap={"16"} max className={classNames(cls.NotificationList, {}, [className])}>
            <Skeleton width={"100"} border={"8px"} height={"80px"}/>
            <Skeleton width={"100"} border={"8px"} height={"80px"}/>
            <Skeleton width={"100"} border={"8px"} height={"80px"}/>
        </VStack>
    }

    return (
        <VStack gap={"16"} max className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map(notification => (
                    <NotificationItem key={notification.id} item={notification}/>
                )
            )}

        </VStack>
    );
});