import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData} from "@/entities/User";
import {getProfileData} from "../../model/selectors/getProfileData/getProfileData";
import {getProfileReadonly} from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {profileActions} from "../../model/slice/profileSlice";
import {updateProfileData} from "../../model/services/updateProfileData/updateProfileData";
import {HStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";

interface EditableProfileCardHeaderPropsType {
    className?: string
}

export const EditableProfileCardHeader = memo(({className}: EditableProfileCardHeaderPropsType) => {
    const {t} = useTranslation("profile");
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify={"between"} className={classNames("", {}, [className])}>
            <Text title={t("Профиль")}/>
            {canEdit && (
                <>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid={'EditableProfileCardHeader.EditButton'}
                            >
                                {t("Редактировать")}
                            </Button>
                        )
                        : (
                            <HStack gap={"8"}>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid={'EditableProfileCardHeader.CancelButton'}
                                >
                                    {t("Отменить")}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid={'EditableProfileCardHeader.SaveButton'}
                                >
                                    {t("Сохранить")}
                                </Button>
                            </HStack>
                        )}
                </>
            )}
        </HStack>
    );
});