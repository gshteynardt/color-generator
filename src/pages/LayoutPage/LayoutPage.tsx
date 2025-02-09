import type { ReactNode } from 'react';
import cn from 'classnames';

import './LayoutPage.scss';

export type Props = {
    className?: string;
    children: ReactNode;
};

export const LayoutPage = ({ className, children }: Props) => {
    return <div className={cn('layout-page',className )}>{children}</div>;
};
