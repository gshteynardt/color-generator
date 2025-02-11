export type State = {
    tokens: string[];
};

export type Actions = {
    regenerate: () => void;
    changeSize: (size?: number) => void;
};
