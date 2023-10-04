import {getQueryParams} from "shared/lib/url/addQueryParams/addQueryParams";

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({test: 'value'})
        expect(params).toBe('?test=value')
    });
    test('test with multiple param', () => {
        const params = getQueryParams({test: 'value', add: 'not'})
        expect(params).toBe('?test=value&add=not')
    });
    test('test with undefined', () => {
        const params = getQueryParams({test: 'value', add: undefined})
        expect(params).toBe('?test=value')
    });
})