import {fireEvent, screen} from "@testing-library/react";
import {EditableProfileCard} from "./EditableProfileCard";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";
import {Profile} from "entities/Profile";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {profileReducer} from "../../model/slice/profileSlice";
import {userEvent} from "@testing-library/user-event/setup/index";

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


describe("features/EditableProfileCard", () => {
    test("Режим ридонли должен переключиться", () => {
        componentRender(<EditableProfileCard />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: profile,
                    form: profile
                }
            },
            asyncReducers: {profile: profileReducer}
        });

        expect(screen.getByTestId("ProfileCard.firstName")).toBeInTheDocument();
        expect(screen.getByTestId("ProfileCard.lastName")).toBeInTheDocument();

        userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId("EditableProfileCardHeader.CancelButton")).toBeInTheDocument()
        // expect(screen.getByTestId("EditableProfileCardHeader.EditButton")).toBeInTheDocument()

    });

});