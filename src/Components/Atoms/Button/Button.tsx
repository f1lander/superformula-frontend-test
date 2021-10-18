import styled, { css } from "styled-components";

const variants: any = {
  filled: `
    width: 304px;
    height: 48px;
    font-size: 14px;
    letter-spacing: 1px;
    background: #002b56;
    color: white;
    border-radius: 2px;
    `,
};

export const Button = styled.button<any>`
  width: 151px;
  height: 38px;
  border: 1px solid #002b56;
  box-sizing: border-box;
  font-family: HelveticaNeue;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  background: white;
  ${({ variant }) =>
    variant
      ? css`
          ${variants[variant]}
        `
      : null}
`;
