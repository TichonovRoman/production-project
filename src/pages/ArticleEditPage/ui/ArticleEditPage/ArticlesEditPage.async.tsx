import { lazy } from 'react';

export const ArticlesEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
