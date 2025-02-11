import { useState, useCallback } from 'react';
import type { ChangeEvent } from 'react';

import { useColorTokensStore } from '~/model/colorTokensSlice';
import { useSettingsStore } from '~/model/settingsSlice';

export const useSettings = () => {
    const { regenerate, changeSize } = useColorTokensStore();
    const { withText, numberColors, updateNumberColors, toogleWithText } = useSettingsStore();
    const [numValue, setNumNalue] = useState(String(numberColors));

    const handleUpdate = useCallback((value: string) => {
        setNumNalue(value);

        const valueAsNumber = Number(value || 1);

        changeSize(valueAsNumber);
        updateNumberColors(valueAsNumber);
    }, [changeSize, updateNumberColors]);

    const handleToogleWithText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        toogleWithText(checked);
    }, [toogleWithText]);

    return {
        numValue,
        withText,
        regenerate,
        handleUpdate,
        handleToogleWithText,
    };
};
