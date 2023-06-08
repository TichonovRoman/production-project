import {StateSchema} from "app/providers/StoreProvider";
import {getLoginUsername} from "./getLoginUsername";

describe("getLoginUsername.test", () => {
    test("should return username", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('username')
    });
    test("should return empty value username", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    });
})