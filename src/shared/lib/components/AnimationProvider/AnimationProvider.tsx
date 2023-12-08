import {createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState} from "react";

type SpringType = typeof import("@react-spring/web");
type GestureType = typeof import("@use-gesture/react");

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({})

// Обе либы зависят друг от друга
// здесь мы их подгружаем асинхронно
// import('@react-spring/web') возвращает промис
const getAsyncAnimationModules = async () => {

    // const Spring = await import('@react-spring/web')
    // const Gesture = await import('@use-gesture/react')
    // здесь Promise.all выполнится в том случае если промисы зарезолвятся
    return Promise.all([
        import("@react-spring/web"),
        import("@use-gesture/react")
    ])

}

export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<AnimationContextPayload>
}

export const AnimationProvider = ({children}: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    const value = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded])

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        })
    }, [])

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    )
}
