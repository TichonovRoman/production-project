import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';
import {AppImage} from "@/shared/ui/AppImage";
import UserAvatarIcon from '../../assets/icons/empty-user-avatar.svg';
import {Icon} from "@/shared/ui/Icon";
import {Skeleton} from "@/shared/ui/Skeleton";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className, src, size = 100, alt, fallbackInverted
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const fallback = <Skeleton width={size} height={size} border={'50%'} />
    const errorFallback = <Icon inverted={fallbackInverted} Svg={UserAvatarIcon} width={size} height={size} />

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
