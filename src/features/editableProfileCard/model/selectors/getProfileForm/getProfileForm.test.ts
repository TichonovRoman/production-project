import {StateSchema} from "app/providers/StoreProvider";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {getProfileForm} from "features/editableProfileCard/model/selectors/getProfileForm/getProfileForm";

describe("getProfileForm.test", () => {
    test("should return form data", () => {
        const form = {
            first: "Павел",
            lastname: "Сидоров",
            age: 20,
            currency: Currency.EUR,
            country: Country.Russia,
            city: "Saratov",
            username: "hazker",
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                form
            }
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});