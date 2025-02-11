export type State = {
    numberColors: number;
    withText: boolean;
};

export type Actions = {
    updateNumberColors: (value: number) => void;
    toogleWithText: (value: boolean) => void; 
};
