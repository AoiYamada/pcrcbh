import styled, { css } from "styled-components";
import { Member } from "../types/Member";

const IconStyles = css`
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

const Box = styled.div``;

const Icon = styled.img`
  ${IconStyles}
`;

const EmptyIcon = styled.div`
  ${IconStyles}
`;

export const MemberBox = ({ id, name, icon, nicknames }: Member) => (
  <Box key={id}>
    {icon === "empty" ? (
      <EmptyIcon>+</EmptyIcon>
    ) : (
      <Icon src={`/pcrcbh/images/${icon}`} alt={name}></Icon>
    )}
  </Box>
);
