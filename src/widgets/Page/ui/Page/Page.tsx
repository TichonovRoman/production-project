import cls from "./Page.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {memo, MutableRefObject, ReactNode, useRef, UIEvent} from "react";
import {useInfiniteScroll} from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getUiScrollByPath, uiActions} from "@/features/Ui";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {StateSchema} from "@/app/providers/StoreProvider";
import {useInitialEffect} from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useThrottle} from "@/shared/lib/hooks/useThrottle/useThrottle";
import {TestProps} from "@/shared/types/tests";

interface PagePropsType extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo(({className, children, onScrollEnd, "data-testid": dataTestid}: PagePropsType) => {

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const {pathname} = useLocation()
    const scrollPosition = useSelector((state: StateSchema) => getUiScrollByPath(state, pathname))

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(uiActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }))
    }, 500)

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
            data-testid={dataTestid ?? 'Page'}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
        </main>
    );
});