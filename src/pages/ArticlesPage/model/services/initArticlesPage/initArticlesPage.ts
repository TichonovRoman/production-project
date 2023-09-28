import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getArticlesPageInited} from "../../selectors/articlesPageSelectors";
import {articlesPageActions} from "../../slices/articlesPageSlice";
import {fetchArticlesList} from "../fetchArticlesList/fetchArticlesList";
import {SortOrder} from "shared/types";
import {ArticleSortField} from "entities/Article";

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    "articlesPage/initArticlesPage",
    async (searchParams, thunkApi) => {
        const {getState, dispatch} = thunkApi;
        const inited = getArticlesPageInited(getState())
        if (!inited) {
            const orderFromURL = searchParams.get('store') as SortOrder
            const sortFromURL = searchParams.get('sort') as ArticleSortField
            const searchFromURL = searchParams.get('search')
            if(orderFromURL) {
                articlesPageActions.setOrder(orderFromURL )
            }
            if(sortFromURL) {
                articlesPageActions.setSort(sortFromURL)
            }
            if(searchFromURL) {
                articlesPageActions.setSearch(searchFromURL)
            }
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);