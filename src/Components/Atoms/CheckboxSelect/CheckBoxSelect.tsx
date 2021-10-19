import React, { useState, useRef } from "react";
import { CheckBoxSelectProps } from "./CheckBoxSelect.types";
import {
  SelectContainer,
  SelectValuesContainer,
  ValueContainer,
} from "../Container/Container";

import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

export const CheckBoxSelect: React.FC<CheckBoxSelectProps> = (
  props: CheckBoxSelectProps
): JSX.Element => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <div ref={ref}>
      <SelectContainer>
        <label>{props.label}</label>
        <span onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 0L7.5455 0.795495L3.77275 4.56824L0 0.795495L0.795495 0L3.77275 2.97725L6.75 0Z"
                fill="#969696"
              />
            </svg>
          ) : (
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 4.56824L7.5455 3.77274L3.77275 -5.24521e-06L0 3.77274L0.795495 4.56824L3.77275 1.59098L6.75 4.56824Z"
                fill="#969696"
              />
            </svg>
          )}
        </span>{" "}
      </SelectContainer>

      <SelectValuesContainer isOpen={isOpen}>
        {props.options?.map((option, index) => (
          <ValueContainer>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              value={option.value}
            />
              <label htmlFor={`checkbox-${index}`}>{option.label}</label>
          </ValueContainer>
        ))}
      </SelectValuesContainer>
    </div>
  );
};
