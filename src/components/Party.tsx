import styled from "styled-components";
import { characterInfo, emptyMembers } from "../constants/characterInfo";
import { SelectionModalContainer } from "../containers/SelectionModalContainer";
import { PartyActionProps, PartyProps } from "../types/Party";
import { MemberBox } from "./MemberBox";

const PartyWrapper = styled.div`
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

const getCharacterInfo = (id: number) => characterInfo[id];

export const Party = ({
  memberIds,
  setMemberIds,
  openModal,
}: PartyProps & PartyActionProps) => (
  <>
    <PartyWrapper
      onClick={() => openModal(memberIds, (ids) => setMemberIds(ids))}
    >
      {[...memberIds.map(getCharacterInfo), ...emptyMembers]
        .slice(0, 5)
        .map(MemberBox)}
    </PartyWrapper>
    <SelectionModalContainer></SelectionModalContainer>
  </>
);
