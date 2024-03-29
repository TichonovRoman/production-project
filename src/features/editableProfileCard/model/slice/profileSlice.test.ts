import {Currency} from "@/entities/Currency";
import {Country} from "@/entities/Country";
import {ProfileSchema} from "@/features/editableProfileCard";
import {profileActions, profileReducer} from "./profileSlice";
import {updateProfileData} from "../services/updateProfileData/updateProfileData";
import {ValidateProfileError} from "../../model/const/consts";

const data = {
    first: "Павел",
    lastname: "Сидоров",
    age: 20,
    currency: Currency.EUR,
    country: Country.Russia,
    city: "Saratov",
    username: "hazker",
}

describe("profileSlice.test", () => {
    test("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        )).toEqual({readonly: true});
    });
    test("test cancel edit", () => {
        const state: DeepPartial<ProfileSchema> = {data};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data
        });
    });
    test("test update profile", () => {
        const state: DeepPartial<ProfileSchema> = {form: {}};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: "123456"
            })
        )).toEqual({
            form: {username: "123456"}
        });
    });
    test("test update profile service pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        });
    });

    test("test update profile service fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, "")
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data
        });
    });
});