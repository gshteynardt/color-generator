import type { ReactNode } from 'react';

import './ShowcaseItem.scss';

export type Props = {
    title: string;
    children: ReactNode;
};

export const ShowcaseItem = ({title, children}: Props) => {
    return (
        <div className="showcase-item">
            <div className="showcase-item__title">{title}</div>
            <div className="showcase-item__content">{children}</div>
        </div>
    );
};
