import { SwitchOption } from '~/components/SwitchsGroup';
import type { ColorOptions, ThemeColorSettings } from '~/types';

const heavy: ColorOptions = {
    lightness: [45, 55],
    situration: [45, 55],
};

const medium: ColorOptions = {
    lightness: [40, 80],
    situration: [15, 55],
};

export const colorOptions: Record<string, ThemeColorSettings> = {
    dark: {
        light: {
            lightness: [25, 35],
            situration: [45, 55],
        },
        medium,
        heavy,
    },
    light: {
        light: {
            lightness: [80, 90],
            situration: [45, 55],
        },
        medium,
        heavy,
    },
};

export const WHITE_COLOR = '#ffffff';
export const BLACK_COLOR = '#000000';

export const switchsOptions: SwitchOption[] = [
    { id: 'withText', label: 'With text' },
    { id: 'withIcon', label: 'With icon' },
    { id: 'setUpManually', label: 'Set up colors manually' },
];

export const settingToId = {
    withText: 'withText',
    withIcon: 'withIcon',
    setUpManually: 'setUpManually',
};
