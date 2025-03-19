export type State = {
    numberColors: number;
    withText: boolean;
    setUpManually: boolean;
};

export type Actions = {
    updateNumberColors: (value: number) => void;
    toggleWithText: (value: boolean) => void;
    toggleSetUpManually: (value: boolean) => void;
};
