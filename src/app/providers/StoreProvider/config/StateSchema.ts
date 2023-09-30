import {CounterSchema} from "entities/Counter";
import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";
import {AnyAction, EnhancedStore, Reducer, ReducersMapObject,} from "@reduxjs/toolkit";
import {CombinedState} from "redux";
import {ProfileSchema} from "entities/Profile";
import {AxiosInstance} from "axios";
import {ArticleDetailsSchema} from "entities/Article";
import {ArticleDetailsCommentSchema, ArticleDetailsRecommendationsSchema} from "pages/ArticleDetailsPage";
import {AddCommentFormSchema} from "features/addCommentForm";
import {ArticlesPageSchema} from "pages/ArticlesPage";
import {UiSchema} from "features/Ui";

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers =  OptionalRecord<StateSchemaKey, boolean>;

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    ui: UiSchema;

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentSchema;
    articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
}



export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // true - вмонтирован, false - демонитрован
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
