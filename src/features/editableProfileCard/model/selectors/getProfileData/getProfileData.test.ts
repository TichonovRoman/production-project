import {StateSchema} from "app/providers/StoreProvider";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {getProfileData} from "features/editableProfileCard/model/selectors/getProfileData/getProfileData";

describe("getProfileData.test", () => {
    test("should return profile data", () => {
        const data = {
            first: "Павел",
            lastname: "Сидоров",
            age: 20,
            currency: Currency.EUR,
            country: Country.Russia,
            city: "Saratov",
            username: "hazker",
        }
        const state: DeepPartial<StateSchema> = {
            profile: {data}
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});