import styled, { css } from "styled-components";

export const IconStyles = css`
  width: 50px;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  vertical-align: middle;
  background-color: #bbbbbb;
  border: solid 1px #468ed5;
  top: 50%;
  border-radius: 3px;
`;

export const Box = styled.div`
  cursor: pointer;
`;

export const Icon = styled.img`
  ${IconStyles}
`;

export const EmptyIcon = styled.div`
  ${IconStyles}
`;
