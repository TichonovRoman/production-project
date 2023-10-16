import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input/Input";
import {ListBox} from "shared/ui/ListBox/ListBox";
import {HStack} from "shared/ui/Stack";

const MainPage = () => {
    const {t} = useTranslation();
    const [value, setValue] = useState("");

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div style={{color: "red"}}>
            {t("Главная страница")}
            <HStack>
                <div>;lgjeqr; j</div>
                <ListBox/>
            </HStack>

        </div>
    );
};

export default MainPage;
