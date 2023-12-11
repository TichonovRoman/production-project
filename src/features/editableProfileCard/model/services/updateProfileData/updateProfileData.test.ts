import {Currency} from "@/entities/Currency";
import {Country} from "@/entities/Country";
import {TestAsyncThunk} from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {updateProfileData} from "@/features/editableProfileCard/model/services/updateProfileData/updateProfileData";
import {ValidateProfileError} from "@/features/editableProfileCard/model/const/consts";

const data = {
    first: "Павел",
    lastname: "Сидоров",
    age: 20,
    currency: Currency.EUR,
    country: Country.Russia,
    city: "Saratov",
    username: "hazker",
    id: "1",
}

describe("updateProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({data}));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR
        ])
    });
    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {...data, lastname: ""},
            }
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])
    });
});