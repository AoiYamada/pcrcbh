import styled from "styled-components";

export const ListItemWrapper = styled.div`
  width: ${({ width }: { width?: string }) => (width ? width : "280px")};
  height: 60px;
  display: flex;
  flex-direction: row;
  user-select: none;
`;
