import styled from "styled-components";

enum directions {
  column = "column",
  row = "row",
}
interface IContainer {
  direction?: keyof typeof directions;
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: ${({ direction }) => directions[direction ?? directions.row]};
  padding: 64px;
`;

export const SelectValuesContainer = styled.div`
  width: 193px;
  flex-direction: column;
  position: absolute;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #c4aaaa;
  box-sizing: border-box;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1), inset 0px -1px 0px #c8c8c8;
  top: 45px;
  color: #606060;
  font-size: 16px;
`;

export const SelectContainer = styled.div`
  display: flex;
  position: relative;
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
