export const getAvatarDisplayText = (text: string) => {
    const letters = text.split(' ');

    let result = '';

    for (let i = 0; result.length < 2 && i < letters.length; i++) {
        if (letters[i]) {
            result += letters[i];
        }
    }

    return result.toUpperCase();
};
