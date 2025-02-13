import { memo } from 'react';
import cn from 'classnames';

import { ColoredAvatar } from '~/components/ColoredAvatar/ColoredAvatar';
import type { Intensity } from '~/types';

import './ColorView.scss';

type Props = {
    className?: string;
    tokens: string[];
    intensity: Intensity;
    withText: boolean;
};

export const ColorView = memo(({ className, tokens, intensity, withText }: Props) => {
    return (
        <div className={cn('color-view', className)}>
            <span>{intensity}</span>
            <div className="color-view__color-items">
                {tokens.map((token) => (
                    <ColoredAvatar
                        key={token}
                        intensity={intensity}
                        seed={token}
                        withText={withText}
                    />
                ))}
            </div>
        </div>
    );
});

ColorView.displayName = 'ColorView';
