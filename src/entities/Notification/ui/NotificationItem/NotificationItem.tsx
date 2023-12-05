import cls from "./NotificationItem.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {Text} from "shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Notification} from "../../model/types/notification";
import {Card, CardTheme} from "shared/ui/Card/Card";

interface NotificationItemPropsType {
    className?: string;
    item: Notification
}

export const NotificationItem = memo(({className, item}: NotificationItemPropsType) => {
    const {t} = useTranslation();

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description}/>

        </Card>
    )
    if(item.href) {
        return (
            <a className={cls.link} target={'_blank'} href={item.href}>
                {content}
            </a>
        )
    }

    return content

});