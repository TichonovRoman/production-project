import {FC, lazy} from "react";
import {AddCommentFormPropsType} from "./AddCommentForm"

export const AddCommentFormAsync = lazy<FC<AddCommentFormPropsType>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import("./AddCommentForm")), 1500);
}));