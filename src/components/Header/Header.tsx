import cn from 'classnames';
import { IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';

import { useSettings } from '~/hooks/useSettings';
import type { Theme } from '~/types';

import { ModeSwitch } from '../ModeSwitch/ModeSwitch';
import { NumberField } from '../NumberField/NumberField';
import { SwitchsGroup } from '../SwitchsGroup';

import './Header.scss';
import { switchsOptions } from '~/constants';

export type Props = {
    className?: string;
    stiky?: boolean;
    theme: Theme;
    onToggleTheme: () => void;
};

export const Header = ({
    className,
    theme,
    stiky = false,
    onToggleTheme,
}: Props) => {
    const {
        numValue,
        checkedIds,
        regenerate,
        handleUpdate,
        handleToggleSettings,
    } = useSettings();

    const checked = theme === 'light';

    return (
        <header
            className={cn(
                'header',
                className,
                `header_theme_${theme}`,
                stiky && 'header_stiky',
            )}
        >
            <div className="header__actions">
                <IconButton
                    onClick={regenerate}
                    color="secondary"
                    title="regenerate colors"
                >
                    <ReplayIcon />
                </IconButton>
                <NumberField
                    className="header__number-field"
                    theme={theme}
                    label="Number colors"
                    placeholder="min 1 max 100 colors"
                    value={numValue}
                    onUpdate={handleUpdate}
                />
                <SwitchsGroup
                    options={switchsOptions}
                    checkedIds={checkedIds}
                    onChange={handleToggleSettings}
                />
            </div>
            <ModeSwitch
                theme={theme}
                checked={checked}
                onToggle={onToggleTheme}
            />
        </header>
    );
};
