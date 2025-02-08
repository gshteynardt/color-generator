import { create } from 'zustand';

import type { State, Actions } from './types';

export const useThemeStore = create<State & Actions>((set) => ({
    theme: 'light',
    toggleTheme: () =>
        set((state) => {
            const currTheme = state.theme;
            const theme = currTheme === 'dark' ? 'light' : 'dark';

            return { theme };
        }),
}));
