import { useCallback } from 'react';
import type { ChangeEvent } from 'react';

import { useColorsConfigurationsSlice } from '~/model/colorsConfigurations';
import { useSettingsStore } from '~/model/settingsSlice';
import { useThemeStore } from '~/model/themeSlice';
import type { Intensity } from '~/types';

export const useColorsConfigurations = () => {
    const { configurations, changeColorIntensityConfiguration } =
        useColorsConfigurationsSlice();
    const { theme } = useThemeStore();
    const { setUpManually } = useSettingsStore();
    const colorsConfigurations = configurations[theme];

    const handleChangeColorConfiguration = useCallback(
        (event: ChangeEvent<HTMLInputElement>, intensity: Intensity) => {
            if (!event.target) {
                return;
            }

            const { value, name } = event.target;
            const configuration = colorsConfigurations[intensity];

            const newConfiguration = {
                ...configuration,
                [name]: value,
            };

            changeColorIntensityConfiguration({
                theme,
                intensity,
                configuration: newConfiguration,
            });
        },
        [changeColorIntensityConfiguration, colorsConfigurations, theme],
    );

    return {
        colorsConfigurations,
        handleChangeColorConfiguration: setUpManually
            ? handleChangeColorConfiguration
            : undefined,
    };
};
