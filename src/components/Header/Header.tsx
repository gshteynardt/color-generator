import cn from 'classnames';

import type { Theme } from '~/types';

import { ModeSwitch } from '../ModeSwitch/ModeSwitch';
import './Header.scss';

export type Props = {
    className?: string;
    theme: Theme;
    onToggleTheme: () => void;
};

export const Header = ({ className, theme, onToggleTheme }: Props) => {
    const checked = theme === 'light';

    return (
        <header className={cn('header', className, `header_theme_${theme}`)}>
            <ModeSwitch theme={theme} checked={checked} onToggle={onToggleTheme} />
        </header>
    );
};
