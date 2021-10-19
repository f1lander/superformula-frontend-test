import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CheckBoxSelect } from "./CheckBoxSelect";
import { CheckBoxSelectProps } from "./CheckBoxSelect.types";

export default {
  title: "Atoms/CheckBoxSelect",
  component: CheckBoxSelect,
} as ComponentMeta<typeof CheckBoxSelect>;

const Template: ComponentStory<typeof CheckBoxSelect> = (args) => <CheckBoxSelect {...args} />;

const checkBoxSelectProps: CheckBoxSelectProps = {
 label: 'Categories',
 options: [
     {
         value: 'all',
         label: 'All'
     },
     {
        value: 'italian',
        label: 'Italian'
    },
    {
        value: 'italian',
        label: 'Seafood'
    },
    {
        value: 'Steakhouses',
        label: 'Steakhouses',
    }
 ]
};
export const checkBoxSelect = Template.bind({});
checkBoxSelect.args = checkBoxSelectProps;
