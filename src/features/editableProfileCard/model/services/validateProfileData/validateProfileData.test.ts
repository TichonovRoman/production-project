import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {validateProfileData} from "features/editableProfileCard/model/services/validateProfileData/validateProfileData";
import {ValidateProfileError} from "features/editableProfileCard/model/types/editableProfileCardSchema";

const data = {
    first: "Павел",
    lastname: "Сидоров",
    age: 20,
    currency: Currency.EUR,
    country: Country.Russia,
    city: "Saratov",
    username: "hazker",
}

describe("validateProfileData.test", () => {
    test("success", async () => {

        const result = validateProfileData(data);
        expect(result).toEqual([])

    });
    test("without first and last name", async () => {

        const result = validateProfileData({...data, first: "", lastname: ""});
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])

    });
    test("incorrect age", async () => {

        const result = validateProfileData({...data, age: undefined});
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])

    });
    test("incorrect country", async () => {

        const result = validateProfileData({...data, country: undefined});
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])

    });
    test("incorrect all", async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ])
    });

});