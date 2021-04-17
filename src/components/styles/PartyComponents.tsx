import styled from "styled-components";

export const PartyWrapper = styled.div`
  cursor: pointer;
  width: ${({ size }: { size: number }) => `${30 + 50 * size}px`};
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: solid 1px #468ed5;
  border-radius: 3px;
  padding-left: 3px;
  padding-right: 3px;
`;
