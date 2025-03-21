import { create } from 'zustand';

import type { State, Actions } from './types';
import { COLORS_NUMBER_PER_INTENSITY } from '../constants';

export const useSettingsStore = create<State & Actions>((set) => ({
    numberColors: COLORS_NUMBER_PER_INTENSITY,
    withText: false,
    withIcon: true,
    setUpManually: false,
    updateNumberColors: (value: number) => set((state) => ({ ...state, numberColors: value })),
    toggleSettings: (name: string, value: boolean) => set((state) => ({ ...state, [name]: value })),
}));
