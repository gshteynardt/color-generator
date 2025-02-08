export const getAvatarDisplayText = (text: string) => {
    const cleanedText = text.replace(/\s+/g, ' ').trim();
    const words = cleanedText.split(' ');
    const result = words.length > 1 ? [words[0][0], words[1][0]].join('') : text.slice(0, 2);

    return result.toUpperCase();
};
