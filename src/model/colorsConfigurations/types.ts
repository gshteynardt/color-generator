import type { Intensity, ThemeColorSettings } from '~/types/color';
import type { Theme } from '~/types';

export type ColorConfiguration = {
        lightness: [number, number];
        situration: [number, number];
};

export type State = {
    configurations: Record<string, ThemeColorSettings>;
};

export type ChangeColorIntensityConfigurationParams = {
    theme: Theme;
    intensity: Intensity;
    configuration: ColorConfiguration;
};

export type Actions = {
    changeColorIntensityConfiguration: (params: ChangeColorIntensityConfigurationParams) => void;
};
