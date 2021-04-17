import { PartyContainer } from "../containers/PartyContainer";
import { ListActionProps } from "../types/Bookmark";
import { PartyActionProps, PartyProps } from "../types/Party";
import { ListItemWrapper } from "./styles/ListComponents";

export const AddPartyForm = ({
  memberIds,
  setMemberIds,
  addPartyToList,
}: PartyProps & PartyActionProps & ListActionProps) => {
  return (
    <ListItemWrapper width="330px">
      <PartyContainer
        memberIds={memberIds}
        setMemberIds={setMemberIds}
      ></PartyContainer>
      <button
        onClick={() => {
          if (!setMemberIds || !addPartyToList) {
            return;
          }

          addPartyToList(memberIds);
          setMemberIds([]);
        }}
      >
        +
      </button>
    </ListItemWrapper>
  );
};
