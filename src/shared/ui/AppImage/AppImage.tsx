import React, {ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    src?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
    alt?: string;
}

export const AppImage = memo((props: AppImageProps) => {
    const { className, src, alt = 'image', fallback, errorFallback, ...otherProps } = props;
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    if(isLoading && fallback) {
        return fallback
    }

    if(hasError && errorFallback) {
        return errorFallback
    }

    useLayoutEffect(() => {
        const img = new Image();

        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false)
        }
        img.onerror = () => {
            setIsLoading(false)
            setHasError(true)
        }
    }, [src])




    return (
        <img src={src} alt={alt} className={className} {...otherProps}>
            
        </img>
    );
});
