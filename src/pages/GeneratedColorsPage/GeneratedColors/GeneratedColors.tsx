import { useMemo } from 'react';
import type { ReactNode } from 'react';
import cn from 'classnames';

import { ColorView } from '~/components/ColorView/ColorView';
import { useColorsConfigurations } from '~/hooks/useColorsConfigurations';
import type { Theme } from '~/types';

import { views } from '../constants';
import './GeneratedColors.scss';

export type Props = {
    theme: Theme;
    tokens: string[];
    withText: boolean;
};

export const GeneratedColors = ({ theme, tokens, withText }: Props) => {
    const { colorsConfigurations, handleChangeColorConfiguration } = useColorsConfigurations();

    const items = useMemo(() => {
        const result: ReactNode[] = [];

        for (const view of views) {
            result.push(
                <ColorView
                    configuration={colorsConfigurations[view]}
                    tokens={tokens}
                    intensity={view}
                    withText={withText}
                    onChangeColorConfiguration={handleChangeColorConfiguration}
                />,
            );
        }

        return result;
    }, [colorsConfigurations, handleChangeColorConfiguration, tokens, withText]);

    return (
        <div
            className={cn(
                'generated-colors',
                `generated-colors_theme_${theme}`,
            )}
        >
            <div className="generated-colors__grid">{items}</div>
        </div>
    );
};
