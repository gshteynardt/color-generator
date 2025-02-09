import { Header } from '~/components/Header/Header';
import { LayoutPage } from '~/pages/LayoutPage/LayoutPage';
import type { Theme } from '~/types';

import { GeneratedColors } from './GeneratedColors/GeneratedColors';

export type Props = {
    className?: string;
    theme: Theme;
    onToggleTheme: () => void;
};

export const GeneratedColorsPage = ({ className, theme, onToggleTheme }: Props) => {
    return (
        <LayoutPage className={className}>
            <Header theme={theme} onToggleTheme={onToggleTheme}/>
            <GeneratedColors theme={theme} />
        </LayoutPage>
    );
};
