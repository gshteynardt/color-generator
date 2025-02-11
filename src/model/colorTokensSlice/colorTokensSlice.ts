import { create } from 'zustand';

import { getTokens } from './utils';
import type { State, Actions } from './types';

export const useColorTokensStore = create<State & Actions>((set) => ({
    tokens: getTokens(),
    changeSize: (size: number = 1) =>
        set(({ tokens }) => {
            const len = tokens.length;

            if (len < size) {
                const partOfTokens = getTokens(size - len);

                return { tokens: tokens.concat(partOfTokens) };
            } else if (len > size) {
                return { tokens: tokens.slice(0, size) };
            }

            return { tokens };
        }),
    regenerate: () =>
        set(({ tokens }) => {
            return { tokens: getTokens(tokens.length) };
        }),
}));
