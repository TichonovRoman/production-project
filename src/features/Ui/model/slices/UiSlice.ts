import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UiSchema} from "../types/UiSchema";

const initialState: UiSchema = {
    scroll: {}
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (state, {payload}: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
