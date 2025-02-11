import { memo } from 'react';
import { TextField } from '@mui/material';
import cn from 'classnames';

import { useNumberField } from './hooks/useNumberField';
import type { Theme } from '~/types';

import { DEFAULT_STEP, DEFAULT_MIN, DEFAULT_MAX } from './constants';
import './NumberField.scss';

export type Props = {
    className?: string;
    value?: string;
    /**
     * Define a number to increase or decrease input value
     * when user clicks arrow keys
     */
    step?: number;
    /** Set a maximum value available for arrow stepping */
    max?: number;
    /** Set a minimum value available for arrow stepping */
    min?: number;
    /** Attach a text label to the input */
    label?: string;
    /** Set at a placeholder text for the input */
    placeholder?: string;
    theme: Theme;
    onUpdate: (value: string) => void;
};

export const NumberField = memo(
    ({
        className,
        value,
        min = DEFAULT_MIN,
        max = DEFAULT_MAX,
        step = DEFAULT_STEP,
        label,
        placeholder,
        theme,
        onUpdate,
    }: Props) => {
        const { handleChange, handleKeyDown } = useNumberField({
            step,
            min,
            max,
            onUpdate,
        });

        return (
            <TextField
                className={cn(
                    'number-field',
                    `number-field_theme_${theme}`,
                    className,
                )}
                label={label}
                placeholder={placeholder}
                value={value}
                type="text"
                inputMode="decimal"
                autoComplete="off"
                size="small"
                color="secondary"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                focused
            />
        );
    },
);

NumberField.displayName = 'NumberField';
