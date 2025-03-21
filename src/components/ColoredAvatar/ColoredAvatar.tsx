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
    icon,
    ...avatarProps
}: ColoredAvatarProps) => {
    const { color, textColor } = useColorGenerator({
        seed,
        intensity,
    });

    const text = withText ? seed : undefined;
    const avatarColor = withText || icon ? textColor : undefined;

    return (
        <Avatar
            {...avatarProps}
            text={text}
            color={avatarColor}
            title={color}
            icon={icon}
            backgroundColor={color}
            size="l"
        />
    );
};
