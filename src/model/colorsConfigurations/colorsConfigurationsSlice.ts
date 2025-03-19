import { create } from 'zustand';

import type { State, Actions, ChangeColorIntensityConfigurationParams } from './types';
import { colorOptions } from '~/constants';

export const useColorsConfigurationsSlice = create<State & Actions>((set, get) => ({
    configurations: colorOptions,
    changeColorIntensityConfiguration: (params: ChangeColorIntensityConfigurationParams) => {
        const { theme, intensity, configuration } = params;
        const configurations = get().configurations;

        const newConfigurations = {
            ...configurations,
            [theme]: {
                ...configurations[theme],
                [intensity]: configuration,
            },
        };

        set(() => ({ configurations: newConfigurations }));
    },
}));
