import { characterInfo, emptyMembers } from "../constants/characterInfo";
import { SelectionModalContainer } from "../containers/SelectionModalContainer";
import { PartyActionProps, PartyProps } from "../types/Party";
import { MemberBox } from "./MemberBox";
import { PartyWrapper } from "./styles/PartyComponents";

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
