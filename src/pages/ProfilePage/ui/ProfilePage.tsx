import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePagePropsType {
    className?: string
}

const ProfilePage = ({className}: ProfilePagePropsType) => {
    const {t} = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames("", {}, [className])}>
                {t("PROFILE PAGE")}
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;