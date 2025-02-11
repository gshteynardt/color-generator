import { COLORS_NUMBER_PER_INTENSITY, ID_LENGTH } from '~/model/constants';
import { getRandomString } from '~/utils';

export const getTokens = (len: number = COLORS_NUMBER_PER_INTENSITY) => {
    return Array.from({ length: len }, () =>
        getRandomString(ID_LENGTH),
    );
};
