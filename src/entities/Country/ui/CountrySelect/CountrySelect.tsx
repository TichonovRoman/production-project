import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import {ListBox} from "@/shared/ui/Popups";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            onChange={onChangeHandler}
            readonly={readonly}
            items={options}
            value={value}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            className={classNames('', {}, [className])}
            direction={'top right'}
        />

        // <Select
        //     className={classNames('', {}, [className])}
        //     label={t('Укажите страну')}
        //     options={options}
        //     value={value}
        //     onChange={onChangeHandler}
        //     readonly={readonly}
        // />
    );
});
