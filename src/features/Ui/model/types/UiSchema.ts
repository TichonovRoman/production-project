
// Адрес страницы, позиция скролла (кол-ва пикселей от верха страницы)
export type ScrollSchema = Record<string, number>

export interface UiSchema {
    scroll: ScrollSchema
}