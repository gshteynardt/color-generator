import { useEffect } from 'react';

import { useThemeStore } from '~/model/themeSlice/themeSlice';

export const useToggleThemeBackground = () => {
    const { theme } = useThemeStore();

    useEffect(() => {
        const body = document.querySelector('body');

        if (!body) {
            return;
        }

        const oldThemeClass = theme === 'light' ? 'dark' : 'light';

        body.classList.remove(oldThemeClass);
        body.classList.add(theme);
    }, [theme]);
};
