import type { Theme } from '~/types';

export type State = {
    theme: Theme;
};

export type Actions = {
    toggleTheme: () => void;
};
