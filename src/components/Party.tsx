import styled from "styled-components";
import { emptyMembers } from "../constants/characterInfo";
import { Member } from "../types/Member";
import { MemberBox } from "./MemberBox";

const PartyContainer = styled.div`
  cursor: pointer;
  width: 280px;
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

export const Party = (members: Member[], openModal: () => void) => (
  <PartyContainer onClick={openModal}>
    {[...members, ...emptyMembers].slice(0, 5).map(MemberBox)}
  </PartyContainer>
);
