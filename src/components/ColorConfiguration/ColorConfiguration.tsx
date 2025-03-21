import cn from 'classnames';
import { Slider, Typography, Box } from '@mui/material';

import type { ColorOptions } from '~/types';

import './ColorConfiguration.scss';

type Props = {
    className?: string;
    configuration: ColorOptions;
    onChange: (event: Event, value: number | number[]) => void;
};

export const ColorConfiguration = ({
    className,
    configuration,
    onChange,
}: Props) => {
    return (
        <div className={cn(className, 'color-configuration')}>
            {Object.keys(configuration).map((option) => (
                <Box key={option}>
                    <Typography>{option}</Typography>
                    <Slider
                        name={option}
                        value={configuration[option as keyof typeof configuration]}
                        color="secondary"
                        min={0}
                        max={100}
                        step={5}
                        valueLabelDisplay="auto"
                        marks
                        onChange={onChange}
                    />
                </Box>
            ))}
        </div>
    );
};
