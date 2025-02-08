import { ComponentProps } from 'react';

import { useColorGenerator } from '~/hooks/useGeneratorColor';
import type { UseColorGeneratorProps } from '~/hooks/useGeneratorColor';

import { Avatar } from '../Avatar/Avatar';

type ColoredAvatarProps = ComponentProps<typeof Avatar> & {
    withText: boolean;
    intensity: UseColorGeneratorProps['intensity'];
    seed: UseColorGeneratorProps['seed'];
};

export const ColoredAvatar = ({
    intensity,
    seed,
    withText,
    ...avatarProps
}: ColoredAvatarProps) => {
    const { color, textColor } = useColorGenerator({
        seed,
        intensity,
    });

    return (
        <Avatar
            {...avatarProps}
            text={withText ? seed : undefined}
            color={withText ? textColor : undefined}
            title={color}
            backgroundColor={color}
            size="l"
        />
    );
};
