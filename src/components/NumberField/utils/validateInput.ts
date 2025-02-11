export const  validateInput = (input: string) => {
    const digitPattern = /^(0|[1-9]\d*)$/;
    return digitPattern.test(input);
};
