import type { ChangeEvent } from 'react';
import { FormControlLabel, Switch } from '@mui/material';

import { SwitchOption } from './type';
import './SwitchsGroup.scss';

export type Props = {
    options: SwitchOption[];
    checkedIds: string[];
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SwitchsGroup = ({ options, checkedIds, onChange }: Props) => {
    return (
        <div className="switchs-group">
            {options.map(({ id, label }) => (
                <FormControlLabel
                    key={id}
                    control={
                        <Switch
                            name={id}
                            color="secondary"
                            checked={checkedIds.includes(id)}
                            onChange={onChange}
                        />
                    }
                    label={label}
                />
            ))}
        </div>
    );
};
