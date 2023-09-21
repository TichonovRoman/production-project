import {MutableRefObject, useEffect, useRef} from "react";

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({callback, wrapperRef, triggerRef}: UseInfiniteScrollOptions) => {

    useEffect(() => {
        const wrapperElement = wrapperRef.current
        const triggerElement = triggerRef.current

        let observer: IntersectionObserver | null = null

        if (callback) {

            const options = {
                root: wrapperElement,
                rootMargin: "0px",
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options);

            observer.observe(triggerElement)

        }

        // отписываемся при размонитровании от observer
        return () => {
            if (observer) {
                observer.unobserve(triggerElement)
            }
        }
    }, [triggerRef, wrapperRef, callback])
}