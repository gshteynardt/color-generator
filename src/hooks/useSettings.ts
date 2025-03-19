import { useState, useCallback } from 'react';
import type { ChangeEvent } from 'react';

import { useColorTokensStore } from '~/model/colorTokensSlice';
import { useSettingsStore } from '~/model/settingsSlice';

export const useSettings = () => {
    const { regenerate, changeSize } = useColorTokensStore();

    const {
        withText,
        setUpManually,
        numberColors,
        updateNumberColors,
        toggleWithText,
        toggleSetUpManually,
    } = useSettingsStore();

    const [numValue, setNumNalue] = useState(String(numberColors));

    const handleUpdate = useCallback((value: string) => {
        setNumNalue(value);

        const valueAsNumber = Number(value || 1);

        changeSize(valueAsNumber);
        updateNumberColors(valueAsNumber);
    }, [changeSize, updateNumberColors]);

    const handleToogleWithText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        toggleWithText(checked);
    }, [toggleWithText]);

    const handleToogleSetUpManually = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        toggleSetUpManually(checked);
    }, [toggleSetUpManually]);

    return {
        numValue,
        withText,
        setUpManually,
        regenerate,
        handleUpdate,
        handleToogleWithText,
        handleToogleSetUpManually,
    };
};
