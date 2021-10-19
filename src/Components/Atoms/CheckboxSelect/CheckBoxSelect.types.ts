import { OptionsProps } from "../../Molecules/Filter/Filter.types";

export interface CheckBoxSelectProps {
    values: Array<OptionsProps>;
    label: string;
    onChange?(): void;
}