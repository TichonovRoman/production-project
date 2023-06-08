import cls from "./ProfileCard.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getProfileData} from "entities/Profile/model/selectors/getProfileData/getProfileData";
import {getProfileIsLoading} from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileError} from "entities/Profile/model/selectors/getProfileError/getProfileError";
import React from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Text} from "shared/ui/Text/Text";
import {Input} from "shared/ui/Input/Input";

interface ProfileCardPropsType {
    className?: string
}

export const ProfileCard = ({className}: ProfileCardPropsType) => {
    const {t} = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваше фамилия')}
                    className={cls.input}
                />
            </div>

        </div>
    );
};