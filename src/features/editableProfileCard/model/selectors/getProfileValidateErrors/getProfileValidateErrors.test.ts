import {StateSchema} from "app/providers/StoreProvider";
import {ValidateProfileError} from "../../types/editableProfileCardSchema";
import {getProfileValidateErrors} from "./getProfileValidateErrors";

describe("getProfileValidateErrors.test", () => {
    test("should return loading status", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.INCORRECT_USER_DATA]
            }
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: []
            }
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
    });
});