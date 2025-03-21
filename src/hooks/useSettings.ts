import { useState, useCallback, useLayoutEffect } from 'react';
import type { ChangeEvent } from 'react';
import { settingToId } from '~/constants';

import { useColorTokensStore } from '~/model/colorTokensSlice';
import { useSettingsStore } from '~/model/settingsSlice';

export const useSettings = () => {
    const { regenerate, changeSize } = useColorTokensStore();

    const {
        withText,
        withIcon,
        setUpManually,
        numberColors,
        updateNumberColors,
        toggleSettings,
    } = useSettingsStore();

    const [numValue, setNumNalue] = useState(String(numberColors));
    const [checkedIds, setCheckedIds] = useState<string[]>([]);

    useLayoutEffect(() => {
        const syncCheckedIds = [];
        const switchSettings = { withText, withIcon, setUpManually };

        for (const [key, value] of Object.entries(switchSettings)) {
            if (value) {
                syncCheckedIds.push(settingToId[key as keyof typeof settingToId]);
            }
        }

        if (syncCheckedIds.length > 0) {
            setCheckedIds(syncCheckedIds);
        } 
    }, [setUpManually, withIcon, withText]);

    const handleUpdate = useCallback(
        (value: string) => {
            setNumNalue(value);

            const valueAsNumber = Number(value || 1);

            changeSize(valueAsNumber);
            updateNumberColors(valueAsNumber);
        },
        [changeSize, updateNumberColors],
    );

    const handleToggleSettings = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { checked, name } = event.target;

            if (checked) {
                setCheckedIds((prev) => prev.concat(name));
            } else {
                const newCheckedIds = checkedIds.filter((id) => id !== name);
                setCheckedIds(newCheckedIds);
            }

            toggleSettings(name, checked);
        },
        [checkedIds, toggleSettings],
    );

    return {
        numValue,
        withText,
        setUpManually,
        checkedIds,
        regenerate,
        handleUpdate,
        handleToggleSettings,
    };
};
