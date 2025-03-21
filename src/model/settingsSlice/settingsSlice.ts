import { create } from 'zustand';

import type { State, Actions } from './types';
import { COLORS_NUMBER_PER_INTENSITY } from '../constants';

export const useSettingsStore = create<State & Actions>((set, get) => ({
    numberColors: COLORS_NUMBER_PER_INTENSITY,
    withText: false,
    withIcon: true,
    setUpManually: false,
    updateNumberColors: (value: number) => set((state) => ({ ...state, numberColors: value })),
    toggleSettings: (name: string, value: boolean) => {
        const state = get();
        const showOnlyText = name === 'withText' && value && state.withIcon;
        const showOnlyIcon = name === 'withIcon' && value && state.withText;

        if (showOnlyText) {
            state.withIcon = false;
        } else if (showOnlyIcon) {
            state.withText = false;
        }

        set(() => ({ ...state, [name]: value }));
    },
}));
