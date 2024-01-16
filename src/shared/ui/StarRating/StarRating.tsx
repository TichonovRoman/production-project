import React, {memo, useState} from 'react';
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './StarRating.module.scss'
import {Icon} from "@/shared/ui/Icon/Icon";
import StarIcon from '@/shared/assets/icons/star.svg'

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {className, size = 30, selectedStars = 0, onSelect} = props;
    const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    // через замыкание мы сможем наверх прокинуть starsCount из иттерируемого массива:
    const onHover = (starsCount: number) => () => {
        if(!isSelected) {
            setCurrentStarCount(starsCount)
        }
    }

    const onLeave = () => {
        if(!isSelected) {
            setCurrentStarCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if(!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarCount(starsCount);
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map(starNumber => (
                <Icon
                    className={classNames(cls.starIcon,
                        {[cls.selected]: isSelected},
                        [currentStarCount >= starNumber ? cls.hovered : cls.normal]
                    )}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});