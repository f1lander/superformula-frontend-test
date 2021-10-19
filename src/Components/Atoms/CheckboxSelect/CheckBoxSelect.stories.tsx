import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CheckBoxSelect } from "./CheckBoxSelect";
import { CheckBoxSelectProps } from "./CheckBoxSelect.types";

export default {
  title: "CheckBoxSelect/Primary",
  component: CheckBoxSelect,
} as ComponentMeta<typeof CheckBoxSelect>;

const Template: ComponentStory<typeof CheckBoxSelect> = (args) => <CheckBoxSelect {...args} />;

const checkBoxSelectProps: CheckBoxSelectProps = {
 label: 'Categories',
 values: [
     {
         value: false,
         label: 'All'
     },
     {
        value: false,
        label: 'Italian'
    },
    {
        value: false,
        label: 'Seafood'
    },
    {
        value: false,
        label: 'Steakhouses',
    }
 ]
};
export const checkBoxSelect = Template.bind({});
checkBoxSelect.args = checkBoxSelectProps;
