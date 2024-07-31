import { Button } from '@/shared/ui/Button';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {counterActions, useCounterActions} from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    // @ts-ignore
    const {increment, decrement, add} = useCounterActions();
    const { t } = useTranslation();

    const handleIncrement = () => {
       increment();
    };

    const handleDecrement = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
