import {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";

interface StoreProviderPropsType {
    children: ReactNode,
    initialState?: StateSchema
}

export const StoreProvider = ({children, initialState}: StoreProviderPropsType) => {

    const store = createReduxStore(initialState)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};