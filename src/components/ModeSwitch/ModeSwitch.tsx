import cn from 'classnames';

import { Theme } from '~/types';

import './ModeSwithc.scss';

export type Props = {
    theme: Theme;
    checked: boolean;
    onToggle: () => void;
};

export const ModeSwitch = ({ theme, checked, onToggle }: Props) => {
    return (
        <label className={cn('mode-switch', `mode-switch_theme_${theme}`)}>
            <input
                id="toggler"
                type="checkbox"
                className="mode-switch__toggler"
                checked={checked}
                onChange={onToggle}
            />
            <span
                className={cn(
                    'mode-switch__slider',
                    'mode-switch__slider_rounded',
                )}
            />
        </label>
    );
};
