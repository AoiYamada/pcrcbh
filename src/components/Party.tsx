import { PartyActionProps, PartyProps } from "../types/Party";
import { MemberBox } from "./MemberBox";
import { PartyWrapper } from "./styles/PartyComponents";

export const Party = ({
  memberIds,
  setMemberIds,
  openModal,
  size = 5,
}: PartyProps & PartyActionProps) => (
  <PartyWrapper
    size={size}
    onClick={
      openModal && setMemberIds
        ? () => openModal(memberIds, (ids) => setMemberIds(ids))
        : () => {}
    }
  >
    {[...memberIds, ...Array.from({ length: size }, () => null)]
      .slice(0, size)
      .map(MemberBox)}
  </PartyWrapper>
);
