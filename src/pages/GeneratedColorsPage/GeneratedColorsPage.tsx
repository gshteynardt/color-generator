import cn from 'classnames';

import { ColoredAvatar } from '~/components/ColoredAvatar/ColoredAvatar';
import { getRandomString } from '~/utils/getRandomString';

import {
    views,
    states,
    COLORS_NUMBER_PER_INTENSITY,
    ID_LENGTH,
} from './constants';
import './GeneratedColorsPage.scss';

export const GeneratedColorsPage = () => {
    const items = [];
    const tokens = Array.from({ length: COLORS_NUMBER_PER_INTENSITY }, () => getRandomString(ID_LENGTH));

    for (const view of views) {
        for (const state of states) {
            const key = `${view}_${state}`;

            if (state === 'view') {
                items.push(
                    <div
                        key={key}
                        className={cn(
                            'generated-colors-page__grid-cell',
                            'generated-colors-page__grid-cell_head_left'
                        )}
                    >
                        <strong>{view}</strong>
                    </div>
                );
            } else {
                items.push(
                    <div className="generated-colors-page__color-items">
                        {tokens.map((token) => (
                            <ColoredAvatar
                                intensity={view}
                                key={token}
                                seed={token}
                                withText
                            />
                        ))}
                    </div>
                );
            }
        }
    }

    return (
        <div className="generated-colors-page">
            <div className="generated-colors-page__grid">{items}</div>
        </div>
    );
};
