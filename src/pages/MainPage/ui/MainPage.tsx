import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {ListBox} from "@/shared/ui/Popups";
import {HStack} from "@/shared/ui/Stack";

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
                <ListBox
                    defaultValue={"Выберите значение"}
                    onChange={(value) => {
                    }}
                    value={undefined}
                    items={[
                        {value: "1", content: "111111111"},
                        {value: "2", content: "222222222", disabled: true},
                        {value: "3", content: "333333333"},
                    ]}
                />
            </HStack>
        </div>
    );
};

export default MainPage;
