export interface OptionsProps {
    value: boolean;
    label: string;
}

export interface FilterProps {
    onClear(): void;
    openNow: boolean;
    prices: Array<OptionsProps>;
    categories: Array<OptionsProps>;
}