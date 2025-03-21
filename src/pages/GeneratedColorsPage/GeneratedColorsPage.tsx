import { Header } from '~/components/Header/Header';
import { LayoutPage } from '~/pages/components/LayoutPage/LayoutPage';
import type { Theme } from '~/types';
import { useColorTokensStore } from '~/model/colorTokensSlice/colorTokensSlice';
import { useSettingsStore } from '~/model/settingsSlice';

import { GeneratedColors } from './GeneratedColors/GeneratedColors';

export type Props = {
    className?: string;
    theme: Theme;
    onToggleTheme: () => void;
};

export const GeneratedColorsPage = ({
    className,
    theme,
    onToggleTheme,
}: Props) => {
    const { tokens } = useColorTokensStore();
    const { withText, withIcon } = useSettingsStore();

    return (
        <LayoutPage className={className}>
            <Header theme={theme} onToggleTheme={onToggleTheme} stiky />
            <GeneratedColors
                theme={theme}
                tokens={tokens}
                withText={withText}
                withIcon={withIcon}
            />
        </LayoutPage>
    );
};
