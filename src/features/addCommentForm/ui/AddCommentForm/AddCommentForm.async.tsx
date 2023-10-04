import {FC, lazy} from "react";
import {AddCommentFormPropsType} from "./AddCommentForm"

export const AddCommentFormAsync = lazy<FC<AddCommentFormPropsType>>(() => import("./AddCommentForm"));