import { useCallback } from 'react';
import type { KeyboardEvent, ChangeEvent } from 'react';

import { validateInput, isInRange } from '../utils';

export type Props = {
    step: number;
    max: number;
    min: number;
    onUpdate: (value: string) => void;
};

export const useNumberField = ({ step, max, min, onUpdate }: Props) => {
    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            const { value } = event.target as HTMLInputElement;
            let nextValue = Number(value || 0);

            if (event.key === 'ArrowUp') {
                nextValue += step;
            } else if (event.key === 'ArrowDown') {
                nextValue -= step;
            }

            if (isInRange({ value: nextValue, min, max })) {
                onUpdate(nextValue.toString());
            }
        },
        [max, min, onUpdate, step],
    );

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        if (value === '') {
            onUpdate('');
            return;
        }

        if (!validateInput(value)) {
            event.preventDefault();
            return;
        }

        const valueAsNumber = Number(event.target.value || 0);

        if (isInRange({ value: valueAsNumber, min, max })) {
            onUpdate(valueAsNumber.toString());
        }
    };

    return {
        handleKeyDown,
        handleChange,
    };
};
