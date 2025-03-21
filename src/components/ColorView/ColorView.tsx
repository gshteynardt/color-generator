import { memo, useCallback } from 'react';
import type { ChangeEvent, ReactNode } from 'react';
import cn from 'classnames';

import { ColoredAvatar } from '~/components/ColoredAvatar/ColoredAvatar';
import type { ColorOptions, Intensity } from '~/types';

import './ColorView.scss';
import { ColorConfiguration } from '~/components/ColorConfiguration/ColorConfiguration';

type Props = {
    className?: string;
    icon?: ReactNode;
    onChangeColorConfiguration?: (
        event: ChangeEvent<HTMLInputElement>,
        intensity: Intensity,
    ) => void;
    configuration: ColorOptions;
    tokens: string[];
    intensity: Intensity;
    withText: boolean;
};

export const ColorView = memo(
    ({
        className,
        tokens,
        intensity,
        withText,
        icon,
        configuration,
        onChangeColorConfiguration,
    }: Props) => {
        const handleChange = useCallback(
            (event: Event) => {
                onChangeColorConfiguration?.(
                    event as unknown as ChangeEvent<HTMLInputElement>,
                    intensity,
                );
            },
            [intensity, onChangeColorConfiguration],
        );

        return (
            <div className={cn('color-view', className)}>
                <span>{intensity}</span>
                {onChangeColorConfiguration && (
                    <ColorConfiguration
                        configuration={configuration}
                        onChange={handleChange}
                    />
                )}
                <div className="color-view__color-items">
                    {tokens.map((token) => (
                        <ColoredAvatar
                            key={token}
                            intensity={intensity}
                            seed={token}
                            withText={withText}
                            icon={icon}
                        />
                    ))}
                </div>
            </div>
        );
    },
);

ColorView.displayName = 'ColorView';
