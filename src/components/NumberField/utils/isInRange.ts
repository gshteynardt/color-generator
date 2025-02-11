type Props = {
    value: number;
    min: number;
    max: number;
};

export const isInRange = ({ value, min, max }: Props) => {
    return value >= min && value <= max;
};
