import { useMemo } from 'react';
import type { ReactNode } from 'react';
import cn from 'classnames';

import type { Theme } from '~/types';

import { ColorView } from '../ColorView/ColorView';
import { views } from '../constants';
import './GeneratedColors.scss';

export type Props = {
    theme: Theme;
    tokens: string[];
    withText: boolean;
};

export const GeneratedColors = ({ theme, tokens, withText }: Props) => {
    const items = useMemo(() => {
        const result: ReactNode[] = [];

        for (const view of views) {
            result.push(
                <ColorView
                    tokens={tokens}
                    intensity={view}
                    withText={withText}
                />,
            );
        }

        return result;
    }, [tokens, withText]);

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
