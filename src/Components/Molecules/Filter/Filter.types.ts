export interface OptionsProps {
    value: string;
    label: string;
}

export interface FilterProps {
    onClear(): void;
    openNow: boolean;
    prices: Array<OptionsProps>;
    categories: Array<OptionsProps>;
}