import { useMemo } from 'react';
import type { ReactNode } from 'react';
import cn from 'classnames';

import { ColoredAvatar } from '~/components/ColoredAvatar/ColoredAvatar';
import type { Theme } from '~/types';

import { views, states } from '../constants';
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
            for (const state of states) {
                const key = `${view}_${state}`;

                if (state === 'view') {
                    result.push(
                        <div
                            key={key}
                            className={cn(
                                'generated-colors__grid-cell',
                                'generated-colors__grid-cell_head_left',
                            )}
                        >
                            <strong>{view}</strong>
                        </div>,
                    );
                } else {
                    result.push(
                        <div className="generated-colors__color-items" key={key}>
                            {tokens.map((token) => (
                                <ColoredAvatar
                                    key={token}
                                    intensity={view}
                                    seed={token}
                                    withText={withText}
                                />
                            ))}
                        </div>,
                    );
                }
            }
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
