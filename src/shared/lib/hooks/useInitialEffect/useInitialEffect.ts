import {useEffect} from "react";
import {fetchArticleById} from "entities/Article/model/services/fetchArticleById/fetchArticleById";

export const useInitialEffect = (callback: () => void) => {
    useEffect(() => {
        if (__PROJECT__ !== "storybook" && __PROJECT__ !== "jest")
            callback()
    }, [])
}