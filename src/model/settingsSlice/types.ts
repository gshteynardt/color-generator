export type State = {
    numberColors: number;
    withText: boolean;
    withIcon: boolean;
    setUpManually: boolean;
};

export type Actions = {
    updateNumberColors: (value: number) => void;
    toggleSettings: (name: string, value: boolean) => void;
};
