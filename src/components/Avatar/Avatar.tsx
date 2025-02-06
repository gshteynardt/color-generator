import type { ReactNode, CSSProperties } from 'react';
import cn from 'classnames';

import { AvatarText } from './AvatarText/AvatarText';
import { AvatarIcon } from './AvatarIcon/AvatarIcon';
import type { AvatarSize } from './types';
import './Avatar.scss';

export type Props = {
    className?: string;
    color?: string;
    backgroundColor?: string;
    title?: string;
    text?: string;
    icon?: ReactNode;
    size?: AvatarSize;
};

export const Avatar = ({
    className,
    color,
    backgroundColor,
    title,
    icon,
    text,
    size = 'm',
}: Props) => {
    const componentClass = cn('avatar', className, `avatar_size_${size}`);

    const style = {
        '--_--background-color': backgroundColor,
        '--_--color': color,
    } as CSSProperties;

    const renderContent = () => {
        if (icon) {
            return <AvatarIcon className="avatar__icon" icon={icon} />;
        }

        if (text) {
            return <AvatarText className="avatar__text" text={text} />;
        }

        return null;
    };

    return (
        <div style={style} className={componentClass} title={title} role="img">
            {renderContent()}
        </div>
    );
};
