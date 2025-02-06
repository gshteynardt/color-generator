import type { ReactNode } from 'react';

export type Props = {
    className?: string;
    color?: string;
    icon: ReactNode;
};

export const AvatarIcon = ({ className, icon, color }: Props) => {
    const style = { color };

    return (
        <div style={style} className={className}>
            {icon}
        </div>
    );
};
