import React from "react";

import {
  FilterBarContainer,
  ValueContainer,
  Item,
} from "../../Atoms/Container/Container";
import { Button, CheckBoxSelect } from "../../Atoms";
import { FilterBarProps } from "./FilterBar.types";

export const FilterBar: React.FC<FilterBarProps> = (
  props: FilterBarProps
): JSX.Element => {
  return (
    <FilterBarContainer>
      <Item flex={2}>
        <div id="filter-label">Filter By:</div>
        <ValueContainer>
          <input type="checkbox" id="checkbox-open-now" value={0} />
          <label htmlFor="checkbox-open-now">Open Now</label>
        </ValueContainer>
        <CheckBoxSelect label="Price" options={[]} />
        <CheckBoxSelect label="Categories" options={[]} />
      </Item>
      <Item flex={1} justifyContent="flex-end">
        <Button>Clear All</Button>
      </Item>
    </FilterBarContainer>
  );
};
