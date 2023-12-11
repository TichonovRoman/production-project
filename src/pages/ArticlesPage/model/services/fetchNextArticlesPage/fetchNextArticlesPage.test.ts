import {TestAsyncThunk} from "../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {fetchNextArticlesPage} from "./fetchNextArticlesPage";
import {fetchArticlesList} from "../fetchArticlesList/fetchArticlesList";
import {ArticleSortField, ArticleType} from "@/entities/Article/model/consts/articleConsts";

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
                type: ArticleType.ALL
            }
        });
        await thunk.callThunk();

        // диспатч должен вызваться 4 раза
        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticlesList).toHaveBeenCalled()
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
                type: ArticleType.ALL
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
                type: ArticleType.ALL
            }
        });
        await thunk.callThunk();

        // диспатч должен вызваться 2 раза
        expect(thunk.dispatch).toBeCalledTimes(2)
        // а эта функция вообще не вызваться
        expect(fetchArticlesList).not.toHaveBeenCalled()
    });
});