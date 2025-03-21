import { useMemo } from 'react';
import type { ReactNode } from 'react';
import cn from 'classnames';

import { ColorView } from '~/components/ColorView/ColorView';
import { FaceRobot } from '~/icons/FaceRobot';
import { useColorsConfigurations } from '~/hooks/useColorsConfigurations';
import type { Theme } from '~/types';

import { views } from '../constants';
import './GeneratedColors.scss';

export type Props = {
    theme: Theme;
    tokens: string[];
    withText: boolean;
    withIcon: boolean;
};

export const GeneratedColors = ({ theme, tokens, withText, withIcon }: Props) => {
    const { colorsConfigurations, handleChangeColorConfiguration } = useColorsConfigurations();
    const icon = useMemo(() => withIcon ? <FaceRobot width={20} height={20} /> : undefined, [withIcon]);

    const items = useMemo(() => {
        const result: ReactNode[] = [];

        for (const view of views) {
            result.push(
                <ColorView
                    key={view}
                    configuration={colorsConfigurations[view]}
                    tokens={tokens}
                    intensity={view}
                    withText={withText}
                    icon={icon}
                    onChangeColorConfiguration={handleChangeColorConfiguration}
                />,
            );
        }

        return result;
    }, [colorsConfigurations, handleChangeColorConfiguration, icon, tokens, withText]);

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
