import axios from "axios";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {userActions} from "entities/User";
import {loginByUsername} from "./loginByUsername";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true)

describe("loginByUsername.test", () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // })
    test("success login", async () => {

        const userValue =  {username: "123", id: "1"};
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue}));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({username: "123", password: "123"})

        // проверяем вызов dispatch с данными юзера
        expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });
    test("error login", async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403}));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({username: "123", password: "123"})


        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("error");
    });
})