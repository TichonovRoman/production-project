import {TestAsyncThunk} from "../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {fetchNextArticlesPage} from "./fetchNextArticlesPage";
import {fetchArticlesList} from "../fetchArticlesList/fetchArticlesList";
import {ArticleSortField} from "entities/Article/model/types/article";

// мокаем функцию которая вызовется внутри санки, чтобы напряму/ здесь проверить ее вызов
jest.mock("../fetchArticlesList/fetchArticlesList")

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            // передаем инициализационный стейт
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                sort: ArticleSortField.CREATED,
                search: '',
                order: 'asc',
            }
        });
        await thunk.callThunk();

        // диспатч должен вызваться 4 раза
        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticlesList).toHaveBeenCalledWith({page: 3})
    });
    test('fetchNextArticlesPage.test not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            // передаем инициализационный стейт
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                sort: ArticleSortField.CREATED,
                search: '',
                order: 'asc',
            }
        });
        await thunk.callThunk();

        // диспатч должен вызваться 2 раза
        expect(thunk.dispatch).toBeCalledTimes(2)
        // а эта функция вообще не вызваться
        expect(fetchArticlesList).not.toHaveBeenCalled()
    });

    test('fetchNextArticlesPage.test not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            // передаем инициализационный стейт
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
                sort: ArticleSortField.CREATED,
                search: '',
                order: 'asc',
            }
        });
        await thunk.callThunk();

        // диспатч должен вызваться 2 раза
        expect(thunk.dispatch).toBeCalledTimes(2)
        // а эта функция вообще не вызваться
        expect(fetchArticlesList).not.toHaveBeenCalled()
    });
});