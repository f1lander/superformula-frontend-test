import styled, { css } from "styled-components";

enum directions {
  column = "column",
  row = "row",
}

interface IContainer {
  direction: keyof typeof directions;
  flex: number;
  justifyContent: string;
}

const fadeOut = css`
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
  visibility: hidden;
`;

const fadeIn = css`
  opacity: 1;
  transition: visibility 0s linear 300ms, opacity 300ms;
  visibility: visible;
`;

export const Item = styled.div<Partial<IContainer>>`
  display: flex;
  flex: ${({ flex }) => flex ?? 1};
  gap: 32px;
  justify-content: ${({ justifyContent }) => justifyContent ?? "flex-start"};
  align-items: center;
  flex-wrap: wrap;
`;

export const Container = styled.div<Partial<IContainer>>`
  display: flex;
  flex-direction: ${({ direction }) => directions[direction ?? directions.row]};
  padding-left: 64px;
  padding-top: 36px;
  padding-bottom: 36px;
`;

export const FilterBarContainer = styled.div<Partial<IContainer>>`
  display: flex;
  flex-direction: ${({ direction }) => directions[direction ?? directions.row]};
  justify-content: flex-start;
  align-items: center;
  min-height: 80px;
  border-top: 1px solid #E6E6E6;
  border-bottom: 1px solid #E6E6E6;
  color: #002b56;
  box-sizing: border-box;
  padding-left: 64px;
  padding-right: 64px;
  flex-wrap: wrap;
  #filter-label {
    color: #606060
  }
`;

export const SelectValuesContainer = styled.div<{ isOpen: boolean }>`
  width: 193px;
  flex-direction: column;
  position: relative;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #c4aaaa;
  box-sizing: border-box;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1), inset 0px -1px 0px #c8c8c8;
  top: 30px;
  color: #606060;
  font-size: 16px;
  background-color: white;
  ${({ isOpen }) => (!isOpen ? fadeOut : fadeIn)};
`;

export const SelectContainer = styled.div`
  display: flex;
  position: absolute;
  width: 193px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  color: #002b56;
  background: white;
  border-bottom: 1px solid #c8c8c8;
  box-sizing: border-box;
  font-family: HelveticaNeue;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  z-index: 2;
`;

export const ValueContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
`;