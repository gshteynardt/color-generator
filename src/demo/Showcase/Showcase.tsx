import type { ReactNode } from 'react';
import cn from 'classnames';

import './Showcase.scss';

export type Props = {
    className?: string;
    title?: string;
    description?: ReactNode;
    children: ReactNode;
};

export const Showcase = ({
    title,
    description,
    className,
    children,
}: Props) => {
    return (
        <div className={cn('showcase', className)}>
            {title && <div className="showcase__title">{title}</div>}
            {description && (
                <div className="showcase__description">{description}</div>
            )}
            <div className="showcase__content">{children}</div>
        </div>
    );
};
