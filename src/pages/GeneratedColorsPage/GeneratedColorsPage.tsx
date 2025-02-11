import { Header } from '~/components/Header/Header';
import { LayoutPage } from '~/pages/components/LayoutPage/LayoutPage';
import type { Theme } from '~/types';

import { GeneratedColors } from './GeneratedColors/GeneratedColors';

export type Props = {
    className?: string;
    theme: Theme;
    tokens: string[];
    withText: boolean;
    onToggleTheme: () => void;
};

export const GeneratedColorsPage = ({
    className,
    theme,
    tokens,
    withText,
    onToggleTheme,
}: Props) => {
    return (
        <LayoutPage className={className}>
            <Header theme={theme} onToggleTheme={onToggleTheme} stiky />
            <GeneratedColors
                theme={theme}
                tokens={tokens}
                withText={withText}
            />
        </LayoutPage>
    );
};
