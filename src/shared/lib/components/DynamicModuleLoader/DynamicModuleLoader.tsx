import {FC, useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {ReduxStoreWithManager, StateSchemaKey} from "app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";
import {entries} from "@storybook/builder-webpack5/dist/ts3.9/presets/preview-preset";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}
type ReducersListEntry = [StateSchemaKey, Reducer]

type DynamicModuleLoaderPropsType = {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderPropsType> = (props) => {
    const {children, reducers, removeAfterUnmount} = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({type: `@INIT ${name} reducer`})
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                    store.reducerManager.add(name, reducer);
                    dispatch({type: `@DESTROY ${name} reducer`})
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    );
};
