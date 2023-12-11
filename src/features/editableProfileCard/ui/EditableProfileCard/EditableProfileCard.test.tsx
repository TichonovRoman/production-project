import {fireEvent, screen} from "@testing-library/react";
import {EditableProfileCard} from "./EditableProfileCard";
import {componentRender} from "@/shared/lib/tests/componentRender/componentRender";
import {Profile} from "@/entities/Profile";
import {Currency} from "@/entities/Currency";
import {Country} from "@/entities/Country";
import {profileReducer} from "../../model/slice/profileSlice";
import {userEvent} from "@testing-library/user-event";
import {$api} from "@/shared/api/api";

const profile: Profile = {
    id: "1",
    first: "admin",
    lastname: "adminLastName",
    age: 465,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: "Moscow",
    username: "admin123",
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile
        },
        user: {
            authData: {id: "1", username: "admin"}
        }

    },
    asyncReducers: {profile: profileReducer}
}


describe("features/EditableProfileCard", () => {
    test("Режим ридонли должен переключиться", async () => {
        componentRender(<EditableProfileCard/>, options);

        expect(screen.getByTestId("ProfileCard.firstName")).toBeInTheDocument();
        expect(screen.getByTestId("ProfileCard.lastName")).toBeInTheDocument();

        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
        expect(screen.getByTestId("EditableProfileCardHeader.CancelButton")).toBeInTheDocument()
        // как сделать проверку на отсутвие элемента
        expect(screen.findByTestId("EditableProfileCardHeader.EditButton")).toBeDefined()

    });
    test("При отмене значения должны обнулятся", async () => {
        componentRender(<EditableProfileCard/>, options);
        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));

        // очищаем поле
        await userEvent.clear(screen.getByTestId("ProfileCard.firstName"))

        expect(screen.getByTestId("ProfileCard.firstName")).toHaveValue("")
        // записываем в поле
        await userEvent.type(screen.getByTestId("ProfileCard.firstName"), "user")
        expect(screen.getByTestId("ProfileCard.firstName")).toHaveValue("user")
        // кликаем Отменить
        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.CancelButton"));
        // должны вернуться дэфолтные настройки
        expect(screen.getByTestId("ProfileCard.firstName")).toHaveValue("admin")
    });
    test("Должна появиться ошибка", async () => {
        componentRender(<EditableProfileCard/>, options);
        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));

        // очищаем поле
        await userEvent.clear(screen.getByTestId("ProfileCard.firstName"))
        // кликаем на Сохранить
        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.SaveButton"));
        // должен появиться элемент ошибки
        expect(screen.getByTestId("EditableProfileCard.Error.Paragraph")).toBeInTheDocument();
        // и этот элемент должен содержать текст "Имя и фамилия обязательны"
        expect(screen.getByTestId("EditableProfileCard.Error.Paragraph")).toHaveTextContent("Имя и фамилия обязательны")
    });
    test("Если нет ошибок валидации, то на сервер должен уйти Put запрос", async () => {
        // мокаем метод который должен вызваться
        // передаем инстанс аксиоса и название метода который дб вызван
        const mockPutReq = jest.spyOn($api, 'put');

        componentRender(<EditableProfileCard/>, options);
        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));

        // очищаем поле
        await userEvent.type(screen.getByTestId("ProfileCard.firstName"), 'admin2')
        // кликаем на Сохранить
        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.SaveButton"));
        // метод дб вызван
        expect(mockPutReq).toHaveBeenCalled()
    });

});