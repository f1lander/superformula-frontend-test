import { CheckBoxSelectProps } from "../../Atoms/CheckBoxSelect/CheckBoxSelect.types";

type OptionsType = CheckBoxSelectProps["options"];
export interface FilterBarProps {
    onFilter(filter: any): void;
    onClearAll(): void;
    priceOptions: OptionsType;
    categoriesOptions: OptionsType
}