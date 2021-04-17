import { PartyActionProps, PartyProps } from "../types/Party";
import { MemberBox } from "./MemberBox";
import { PartyWrapper } from "./styles/PartyComponents";

const empties = [null, null, null, null, null];

export const Party = ({
  memberIds,
  setMemberIds,
  openModal,
}: PartyProps & PartyActionProps) => (
  <PartyWrapper
    onClick={() => openModal(memberIds, (ids) => setMemberIds(ids))}
  >
    {[...memberIds, ...empties].slice(0, 5).map(MemberBox)}
  </PartyWrapper>
);
