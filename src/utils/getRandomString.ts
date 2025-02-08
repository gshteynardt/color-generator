const MASK = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const getRandomString = (length: number) => {
    let result = '';

    for (let index = length; index >= 0; index--) {
        result += MASK[Math.round(Math.random() * (MASK.length - 1))];
    }

    return result;
};
