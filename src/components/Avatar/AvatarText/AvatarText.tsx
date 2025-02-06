import { getAvatarDisplayText } from './utils';

export type Props = {
    className?: string;
    color?: string;
    text: string;
};

export const AvatarText = ({ text, color, className }: Props) => {
    const style = { color };
    const displayText = getAvatarDisplayText(text);

    return (
        <div style={style} className={className}>
            {displayText}
        </div>
    );
};
